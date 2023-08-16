import React from 'react';
import { Box, Image, Text, Heading, Tag, VStack, HStack } from '@chakra-ui/react';

function EventCard({ event }) {
    const displayDate = event.date.seconds ? new Date(event.date.seconds * 1000).toLocaleDateString() : event.date;

    return (
        <Box 
            key={event.id}
            maxW="30rem"
            maxH="30rem" 
            borderWidth="1px" 
            borderRadius="lg" 
            overflow="hidden"
            p={5}
        >
            <Image src={event.imageURL} alt={event.name} boxSize="12rem" objectFit="cover" />
            <Heading size="md" mt={4}>{event.name}</Heading>
            <Text mt={2}>{event.summary}</Text>
            <HStack mt={4} spacing={4}>
                {event.tags.map(tag => (
                    <Tag key={tag} size="md" variant="outline" colorScheme="blue">
                        {tag}
                    </Tag>
                ))}
            </HStack>
            <Text mt={4}>Date: {displayDate}</Text>
            <Text>Time: {event.time}</Text>
            <Text mt={4} color="blue.500">Price: ${event.price}</Text>
        </Box>
    );
}

export default EventCard;