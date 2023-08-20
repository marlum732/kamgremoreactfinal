const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.archivePastEvents = functions.pubsub.schedule('0 0 * * *').timeZone('Europe/Ljubljana').onRun(async (context) => {
    const currentTime = new Date();
    const eventsRef = admin.firestore().collection('events');

    const snapshot = await eventsRef.where('date', '<=', currentTime).get();

    if (snapshot.empty) {
        console.log('No matching events found');
        return null;
    }

    const batch = admin.firestore().batch();

    snapshot.docs.forEach((doc) => {
        const eventRef = eventsRef.doc(doc.id);
        batch.update(eventRef, { archived: true });
    });

    return batch.commit().then(() => {
        console.log('Archived');
        return null;
    }).catch((error) => {
        console.error('Error archiving events:', error);
    });
});
