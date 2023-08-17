import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Flex } from '@chakra-ui/react';

function Navigation() {
    return (
        <Flex justifyContent="space-between" p={5} bg="blue.500" color="white" align="center">
            <Link to="/home">Home</Link>
            <Box>
                <Box as={Link} to="/login" mr={7}>Login</Box>
                <Box as={Link} to="/signup" mr={7}>Signup</Box>
                <Button as={Link} to="/addevent" colorScheme="blue" size="sm" border="2px" borderColor="white">Add Event</Button>

            </Box>
        </Flex>
    );
}

export default Navigation;
