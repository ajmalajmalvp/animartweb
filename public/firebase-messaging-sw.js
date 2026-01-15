importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
// // Initialize the Firebase app in the service worker by passing the generated config

const firebaseConfig = {
  apiKey: "AIzaSyCcd0h02NBoosa3tudgV19CPWNuyLgK07Q",
  authDomain: "animart-8c911.firebaseapp.com",
  projectId: "animart-8c911",
  storageBucket: "animart-8c911.firebasestorage.app",
  messagingSenderId: "700088778140",
  appId: "1:700088778140:web:33e0657080b80cc04cdc59",
  measurementId: "G-9WF2J0X85B"
};

firebase?.initializeApp(firebaseConfig)

// Retrieve firebase messaging
const messaging = firebase.messaging();

self.addEventListener('install', function (event) {
    console.log('Hello world from the Service Worker :call_me_hand:');
});


