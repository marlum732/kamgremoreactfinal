import React, { useState, useEffect } from 'react';
import { fetchEvents } from '../services/eventService';
import EventGrid from '../components/EventGrid';

function HomePage() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getEvents = async () => {
            const fetchedEvents = await fetchEvents();
            setEvents(fetchedEvents);
            setIsLoading(false);  
        };
        
        getEvents();
    }, []);

    return (
        <EventGrid events={events} isLoading={isLoading} />
    );
}

export default HomePage;
