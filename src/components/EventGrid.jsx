import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import EventCard from './EventCard';
import EventCardSkeleton from './EventCardSkeleton';

function EventGrid({ events, isLoading }) {
    return (
        <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            padding="10px"
            spacing={6}
            width="100%" 
        >
            {isLoading && [1, 2, 3, 4, 5, 6].map((_, idx) => (
                <EventCardSkeleton key={idx} />
            ))}
            {events.map(event => (
                <EventCard key={event.id} event={event} />
            ))}
        </SimpleGrid>
    );
}

export default EventGrid;