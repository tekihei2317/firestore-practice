<script setup>
import { ref, onBeforeMount } from 'vue';
import { getFirestore, query, doc, getDocs, addDoc, collection } from 'firebase/firestore';

const users = ref([]);
const db = getFirestore();

onBeforeMount(async () => {
  const usersRef = collection(db, 'users');
  const querySnapshot = await getDocs(usersRef);

  users.value = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data());
    users.value.push(doc.data());
  });
  console.log(users.value);
});

const addUser = async () => {
  const userData = {
    name: `test ${new Date().toLocaleString()}`,
    email: 'test@example.com',
  };

  const userProfileData = {
    age: 18,
    prefecture: 'Hyogo',
  };

  const user = await addDoc(collection(db, 'users'), userData);
  console.log(user.id);
  const userProfile = await addDoc(collection(db, 'users', user.id, 'profiles'), userProfileData);
};
</script>

<template>
  <div>
    <h1>Firestore Practice</h1>
    <div>
      <h2>ユーザー一覧</h2>
      <div>{{ users }}</div>
      <button @click="addUser">ユーザーを追加する</button>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
