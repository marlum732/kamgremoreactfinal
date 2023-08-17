import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEventById } from '../services/eventService';
import { Box, Text, Heading, VStack } from '@chakra-ui/react';

function EventDetails() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            const fetchedEvent = await fetchEventById(id);
            setEvent(fetchedEvent);
        };

        fetchEvent();
    }, [id]);

    if (!event) {
        return <Text>Loading...</Text>;
    }

    return (
        <VStack spacing={4} align="start">
            <Heading>{event.name}</Heading>
            <Text>{event.summary}</Text>
            
        </VStack>
    );
}

export default EventDetails;