import React, { useState, useEffect } from 'react';
import { fetchEvents } from '../services/eventService';
import EventGrid from '../components/EventGrid';
import { useSearch } from '../components/SearchContext';

function HomePage() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { searchQuery} = useSearch();

    useEffect(() => {
        const getEvents = async () => {
            const fetchedEvents = await fetchEvents();
            if (searchQuery) {
                const filteredEvents = fetchedEvents.filter(event => 
                    event.name.toLowerCase().includes(searchQuery.toLowerCase())
                );
                setEvents(filteredEvents);
            } else {
                setEvents(fetchedEvents);
            }
            setIsLoading(false);  
        };
        
        getEvents();
    }, [searchQuery]);
    

    return (
        <EventGrid events={events} isLoading={isLoading} />
    );
}

export default HomePage;
