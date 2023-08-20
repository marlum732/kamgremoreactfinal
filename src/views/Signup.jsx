import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input, VStack, Flex, Heading, CheckboxGroup, Checkbox } from '@chakra-ui/react';
import { auth, db, doc, setDoc } from '../services/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [favoriteClubs, setFavoriteClubs] = useState([]); 
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

    //checkbox
  const handleCheckboxChange = (values) => {
    setFavoriteClubs(values);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        username: username,
        email: email,
        favoriteClubs: favoriteClubs
      });

      console.log('User signed up:', user);
      navigate('/login');
    } catch (err) {
      setError(err.message);
      console.error('Signup error:', err);
    }
  };

  return (
    <Flex width="100vw" height="100vh" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>Sign Up</Heading>
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input 
            placeholder="Enter your username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input 
            type="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        <FormControl id="favoriteClubs">
          <FormLabel>Favorite Clubs</FormLabel>
          <CheckboxGroup onChange={handleCheckboxChange}>
            <Checkbox value="Club1">Pergola</Checkbox>
            <Checkbox value="Club2">Alaya</Checkbox>
            <Checkbox value="Club3">Tivoli</Checkbox>
            <Checkbox value="Club4">Retro</Checkbox>
            <Checkbox value="Club5">Bellavita</Checkbox>
            <Checkbox value="Club6">Canava</Checkbox>
          </CheckboxGroup>
        </FormControl>

        {error && <Box color="red.500">{error}</Box>}

        <Button colorScheme="blue" onClick={handleSignup}>Sign Up</Button>
      </VStack>
    </Flex>
  );
}

export default Signup;
