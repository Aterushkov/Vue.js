import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
});

export const db = app.database();

export const productsRef = db.ref('products');

