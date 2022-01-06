import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';

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
