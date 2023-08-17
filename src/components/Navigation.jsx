import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Flex } from '@chakra-ui/react';

function Navigation() {
    return (
        <Flex justifyContent="space-between" p={5} bg="blue.500" color="white" align="center">
            <Link to="/home">Home</Link>
            <Box>
                <Link to="/login" mr={5}>Login</Link>  {}
                <Link to="/signup" mr={3}>Signup</Link>
                <Button as={Link} to="/addevent" colorScheme="blue" size="sm">
                    Add Event
                </Button>
            </Box>
        </Flex>
    );
}

export default Navigation;
