import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export const fetchEvents = async () => {
    const eventsCollection = collection(db, 'events');
    const eventSnapshot = await getDocs(eventsCollection);
    const eventList = eventSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    }));
    return eventList;
};