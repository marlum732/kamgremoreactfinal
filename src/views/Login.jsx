import React, { useState, useEffect } from 'react';
import { VStack, Button, Input, FormControl, FormLabel, Heading, useToast, Flex, Text } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth, signInWithEmailAndPassword } from '../services/firebaseConfig';
import { useAuth } from '../components/AuthContext';  

function Login({ onSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const toast = useToast();
    const location = useLocation();
    const { setIsAuthenticated } = useAuth();  

    useEffect(() => {
        if (location.state?.fromEventCreation) {
            setErrorMessage("You need to be signed up and login to create an event");
        }
    }, [location]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            setIsAuthenticated(true);  
            toast({
                title: "Logged in successfully.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            if (onSuccess) {
                onSuccess();
            }
        } catch (error) {
            toast({
                title: "Error logging in.",
                description: error.message,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <Flex width="100vw" height="100vh" justifyContent="center" alignItems="center">
            <VStack spacing={4}>
                {errorMessage && <Text color="red.500" mb={4}>{errorMessage}</Text>}
                <Heading>Login</Heading>
                <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormControl>
                <Button colorScheme="blue" onClick={handleSubmit}>Login</Button>
            </VStack>
        </Flex>
    );
}

export default Login;
