import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack, Textarea, Flex, HStack, useToast } from '@chakra-ui/react';
import { addEvent } from '../services/eventService';
import TagInput from '../components/TagInput';
import { useNavigate } from 'react-router-dom';

function EventForm() {
    const [name, setName] = useState('');
    const [summary, setSummary] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [price, setPrice] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [tags, setTags] = useState([]);

    const navigate = useNavigate();
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const [year, month, day] = date.split("-");
        const formattedDate = `${month}/${day}/${year}`;
        
        const eventData = {
            name,
            summary,
            date: formattedDate,
            time,
            price,
            imageURL,
            tags
        };

        try {
            await addEvent(eventData);
            toast({
                title: "Event created.",
                description: "Your event has been successfully created.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            navigate('/home');
        } catch (error) {
            console.error("Error adding event: ", error);
        }
    };

    return (
        <Flex height="calc(100vh - 64px)" justify="center" align="center">
        <Box width="60%" py={8}>
            <VStack spacing={6} align="start">
                <HStack spacing={6} width="100%">
                    <FormControl id="name" width="50%">
                        <FormLabel>Event Name</FormLabel>
                        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </FormControl>
                    <FormControl id="date" width="25%">
                        <FormLabel>Date</FormLabel>
                        <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    </FormControl>
                    <FormControl id="time" width="25%">
                        <FormLabel>Time</FormLabel>
                        <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                    </FormControl>
                </HStack>
                <FormControl id="summary" width="100%">
                    
                        <FormLabel>Summary</FormLabel>
                        <Textarea value={summary} onChange={(e) => setSummary(e.target.value)} />
                        </FormControl>

                        <HStack spacing={6} width="100%">
                        <FormControl id="price" width="50%">
                            <FormLabel>Price</FormLabel>
                            <Input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </FormControl>
                        <FormControl id="imageURL" width="50%">
                            <FormLabel>Image URL</FormLabel>
                            <Input type="url" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
                        </FormControl>
                    </HStack>
                    <FormControl id="tags" width="100%">
                        <FormLabel>Tags</FormLabel>
                        <TagInput tags={tags} setTags={setTags} />

                   
                    </FormControl>
                    <Button onClick={handleSubmit}>Add Event</Button>
                </VStack>
            </Box>
        </Flex>
    );
}

export default EventForm;