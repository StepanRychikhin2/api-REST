const axios = require('axios');

// Функція для отримання списку постів
async function getPosts() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

// Функція для отримання даних про конкретний пост за ID
async function getPostById(postId) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

// Функція для отримання списку користувачів
async function getUsers() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

// Функція для отримання даних про конкретного користувача за ID
async function getUserById(userId) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

// Виклик функцій
getPosts();
getPostById(1); // Приклад виклику для отримання поста з ID = 1
getUsers();
getUserById(1); // Приклад виклику для отримання користувача з ID = 1