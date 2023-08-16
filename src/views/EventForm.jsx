import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack, Textarea, Flex, Grid } from '@chakra-ui/react';
import { addEvent } from '../services/eventService';
import TagInput from '../components/TagInput';

function EventForm() {
    const [name, setName] = useState('');
    const [summary, setSummary] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [price, setPrice] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [tags, setTags] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const eventData = {
            name,
            summary,
            date,
            time,
            price,
            imageURL,
            tags
        };

        try {
            await addEvent(eventData);
        } catch (error) {
            console.error("Error adding event: ", error);
        }
    };

    return (
        <Flex justifyContent="center" alignItems="center" height="100vh" width="100%">
            <Box width="100%" maxWidth="800px" borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <FormControl id="name">
                        <FormLabel>Event Name</FormLabel>
                        <Input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </FormControl>
                    
                    <FormControl id="summary">
                        <FormLabel>Summary</FormLabel>
                        <Textarea 
                            value={summary} 
                            onChange={(e) => setSummary(e.target.value)} 
                        />
                    </FormControl>

                    <FormControl id="date">
                        <FormLabel>Date</FormLabel>
                        <Input 
                            type="date" 
                            value={date} 
                            onChange={(e) => setDate(e.target.value)} 
                        />
                    </FormControl>

                    <FormControl id="time">
                        <FormLabel>Time</FormLabel>
                        <Input 
                            type="time" 
                            value={time} 
                            onChange={(e) => setTime(e.target.value)} 
                        />
                    </FormControl>

                    <FormControl id="price">
                        <FormLabel>Price</FormLabel>
                        <Input 
                            type="text" 
                            value={price} 
                            onChange={(e) => setPrice(e.target.value)} 
                        />
                    </FormControl>

                    <FormControl id="imageURL">
                        <FormLabel>Image URL</FormLabel>
                        <Input 
                            type="url" 
                            value={imageURL} 
                            onChange={(e) => setImageURL(e.target.value)} 
                        />
                    </FormControl>
                </Grid>

                <FormControl id="tags" mt={4}>
                    <FormLabel>Tags</FormLabel>
                    <TagInput tags={tags} setTags={setTags} />
                </FormControl>

                <Button mt={4} onClick={handleSubmit}>Add Event</Button>
            </Box>
        </Flex>
    );
}

export default EventForm;