// bugSolution.js
const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc } = require('firebase/firestore');
const firebaseConfig = {
  // Your Firebase config
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
async function writeData(data) {
  try {
    const docRef = doc(db, 'yourCollection', 'yourDocId');
    const result = await setDoc(docRef, data);
    console.log('Data written with ID: ', result);
  } catch (error) {
    console.error('Error writing data: ', error);
  }
}
async function checkData(docId) {
  // Add delay to allow for asynchronous operations to complete
  await new Promise(r => setTimeout(r, 2000));
  // Check Firestore to ensure data was written
  // ... (Implementation to check Firestore for data)
}
const dataToWrite = { field1: 'value1', field2: 'value2' };
writeData(dataToWrite).then(() => checkData('yourDocId'));