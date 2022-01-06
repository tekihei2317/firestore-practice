import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDBcfkNO4t4p8U0Yraq6fSXELu4tWv37bc',
  authDomain: 'firestore-practice-e6328.firebaseapp.com',
  projectId: 'firestore-practice-e6328',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();

const docRef = await addDoc(collection(db, 'users'), {
  first: 'Ada',
  last: 'Lovelace',
  born: 1815,
})
  .then(() => {
    console.log('ドキュメントを追加しました');
  })
  .catch((e) => {
    console.error('Error adding document: ', e);
  });
