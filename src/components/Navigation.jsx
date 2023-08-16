import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';

function Navigation() {
    return (
        <Box padding={5} bg="blue.500" display="flex" justifyContent="space-between">
        <Link to="/home">Home</Link>
        <Box>
            <Button as={Link} to="/login" marginRight={5}>
                Login
            </Button>
            <Button as={Link} to="/signup">
                Signup
            </Button>
        </Box>
    </Box>
    );
}

export default Navigation;