import React, { useState } from 'react';
import {Button, FormControl, FormLabel, Input, VStack, Text } from '@chakra-ui/react';
import { auth} from '../services/firebaseConfig';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => { //promise
    try {
      await auth.signInWithEmailAndPassword(email, password); //wait for resolving the promise
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <VStack spacing={4}>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      <Button onClick={handleLogin}>Login</Button>
      {error && <Text color="red.500">{error}</Text>}
    </VStack>
  );
}

export default Login;