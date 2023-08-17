import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEventById } from '../services/eventService';
import { Box, Image, Text, Heading, Tag, VStack, HStack, Flex } from '@chakra-ui/react';

const EventDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const eventData = await fetchEventById(id);
                setEvent(eventData);
            } catch (error) {
                console.error("Error fetching event details:", error);
            }
        };

        fetchEvent();
    }, [id]);

    if (!event) {
        return (
            <Box
                height="100vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="gray.200"
            >
                <Text fontSize="6xl" color="blue.500">Loading...</Text>
            </Box>
        );
    }
    

    const displayDate = event.date.seconds ? new Date(event.date.seconds * 1000).toLocaleDateString() : event.date;
    const displayLocation = typeof event.location === 'object' 
        ? `${event.location._lat}, ${event.location._long}`
        : event.location;

    return (
        <Flex p={5} direction="row" align="start">
<Image src={event.imageURL} alt={event.name} w="50%" h="40rem" mt={-38} objectFit="contain" />
            <Box maxW="50%" ml={8} >
                <Heading size="2xl" mb={4} mt={10}>{event.name}</Heading>
                <VStack align="start" spacing={4} mb={8}>
                    <Text fontSize="xl">Date: {displayDate}</Text>
                    <Text fontSize="xl">Location: {displayLocation}</Text>
                    <Text fontSize="xl">Time: {event.time}</Text>
                    <Text fontSize="xl" color="blue.500">Price: ${event.price}</Text>
                    <HStack spacing={4}>
                        {event.tags.map(tag => (
                            <Tag key={tag} size="md" variant="outline" colorScheme="blue">
                                {tag}
                            </Tag>
                        ))}
                    </HStack>
                </VStack>
                <Text>{event.summary}</Text>
            </Box>
        </Flex>
    );
};

export default EventDetails;