import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input, VStack, Flex, Heading } from '@chakra-ui/react';
import { auth, signInWithEmailAndPassword } from '../services/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  const handleSignup = async (e) => { //event
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password); //it waits to returns a resolved promise
      const user = userCredential.user;
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

        {error && <Box color="red.500">{error}</Box>}

        <Button colorScheme="blue" onClick={handleSignup}>Sign Up</Button>
      </VStack>
    </Flex>
  );
}

export default Signup;
