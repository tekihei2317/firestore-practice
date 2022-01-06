import { createApp } from 'vue';
import { initializeApp } from 'firebase/app';
import App from './App.vue';

const firebaseConfig = {
  apiKey: 'AIzaSyDBcfkNO4t4p8U0Yraq6fSXELu4tWv37bc',
  authDomain: 'firestore-practice-e6328.firebaseapp.com',
  projectId: 'firestore-practice-e6328',
};

initializeApp(firebaseConfig);

createApp(App).mount('#app');
