import { db } from './firebaseConfig';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export const fetchEvents = async () => {
    const eventsCollection = collection(db, 'events');
    const eventSnapshot = await getDocs(eventsCollection);
    const eventList = eventSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    }));
    return eventList;
};

// Function to add an event
export const addEvent = async (eventData) => {
    try {
        const docRef = await addDoc(collection(db, "events"), eventData);
        return docRef.id;  //id of new event
    } catch (error) {
        console.error("Error adding event: ", error);
        throw error;
    }
};
