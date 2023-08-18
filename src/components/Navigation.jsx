import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Flex, Spacer } from '@chakra-ui/react';
import SearchInput from './SearchInput';
import { useSearch } from '../components/SearchContext';

function Navigation() {
    const { searchQuery, setQuery } = useSearch();

    const handleSearch = (searchText) => {
        setQuery(searchText);
    };

  return (
    <Flex justifyContent="space-between" p={5} bg="blue.500" color="white" align="center">
      <Box display="flex" alignItems="center">
        <Link to="/home">Home</Link>
        <Spacer width="2rem" />
        <SearchInput onSearch={handleSearch} />
      </Box>
      <Box>
        <Box as={Link} to="/login" mr={7}>Login</Box>
        <Box as={Link} to="/signup" mr={7}>Signup</Box>
        <Button as={Link} to="/addevent" colorScheme="blue" size="sm" border="2px" borderColor="white">
          Add Event
        </Button>
      </Box>
    </Flex>
  );
}

export default Navigation;
