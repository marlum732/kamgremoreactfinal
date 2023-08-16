import React, { useState, useEffect } from 'react';
import { Box, Image, Text, Heading, Tag, VStack, HStack } from '@chakra-ui/react';
import { fetchEvents } from '../services/eventService';
  
function HomePage() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const getEvents = async () => {
            const fetchedEvents = await fetchEvents();
            setEvents(fetchedEvents);
        };
        
        getEvents();
    }, []);
  
    return (
        <VStack spacing={5} align="center">
        {events.map(event => (
            <Box 
                key={event.id}
                maxW="sm" 
                borderWidth="1px" 
                borderRadius="lg" 
                overflow="hidden"
                p={5}
            >
                <Image src={event.imageURL} alt={event.name} />
                <Heading size="md" mt={4}>{event.name}</Heading>
                <Text mt={2}>{event.summary}</Text>
                <HStack mt={4} spacing={4}>
                    {event.tags.map(tag => (
                        <Tag key={tag} size="md" variant="outline" colorScheme="blue">
                            {tag}
                        </Tag>
                    ))}
                </HStack>
                <Text mt={4}>Date: {new Date(event.date.seconds * 1000).toLocaleDateString()}</Text>
                <Text>Time: {event.time}</Text>
                <Text mt={4} color="blue.500">Price: ${event.price}</Text>
            </Box>
        ))}
    </VStack>
    );
  }
  
  export default HomePage;