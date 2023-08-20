import React, { useState, useEffect } from 'react';
import { fetchEvents } from '../services/eventService';
import EventGrid from '../components/EventGrid';
import { useSearch } from '../components/SearchContext';
import LocationSelector from '../components/LocationSelector';
import DateSelector from '../components/DateSelector';
import TagSelector from '../components/TagSelector';
import PriceSelector from '../components/PriceSelector';
import ClubSelector from '../components/ClubSelector';
import { Heading, Flex } from "@chakra-ui/react";

function HomePage() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { searchQuery } = useSearch();

    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTag, setSelectedTag] = useState("");
    const [selectedPriceFilter, setSelectedPriceFilter] = useState(null);
    const [selectedClubs, setSelectedClubs] = useState([]);


    useEffect(() => {
        const getEvents = async () => {
            const fetchedEvents = await fetchEvents();
            let filteredEvents = fetchedEvents;

            if (searchQuery) {
                filteredEvents = filteredEvents.filter(event => 
                    event.name.toLowerCase().includes(searchQuery.toLowerCase())
                );
            }

            if (selectedLocation) {
                filteredEvents = filteredEvents.filter(event => 
                    event.location === selectedLocation
                );
            }

            if (selectedDate) {
                filteredEvents = filteredEvents.filter(event => 
                    event.date === selectedDate
                );
            }

            if (selectedTag) {
                filteredEvents = filteredEvents.filter(event => 
                    event.tags.includes(selectedTag)
                );
            }

            if (selectedPriceFilter) {
                filteredEvents = filteredEvents.filter(event => 
                    selectedPriceFilter.condition(event.price)
                );
            }

            if (selectedClubs.length > 0) {
                filteredEvents = filteredEvents.filter(event => 
                    selectedClubs.includes(event.location)
                );
            }
    

            setEvents(filteredEvents);
            setIsLoading(false);  
        };
        
        getEvents();
    }, [searchQuery, selectedLocation, selectedDate, selectedTag, selectedPriceFilter, selectedClubs]);

    return (
        <div>
            <Flex align="center" justify="space-between" mb={4}>
                <Heading size="2xl" mb={5} mt={5} ml={5}>EVENTS</Heading>
                <Flex>
                    <LocationSelector onSelectLocation={setSelectedLocation} selectedLocation={selectedLocation} />
                    <DateSelector onSelectDate={setSelectedDate} selectedDate={selectedDate} />
                    <TagSelector onSelectTag={setSelectedTag} selectedTag={selectedTag} />
                    <PriceSelector onSelectPriceFilter={setSelectedPriceFilter} selectedPriceFilter={selectedPriceFilter?.label} />
                    <ClubSelector onSelectClubs={setSelectedClubs} selectedClubs={selectedClubs} />
                </Flex>
            </Flex>
            <EventGrid events={events} isLoading={isLoading} />
        </div>
    );
}

export default HomePage;
