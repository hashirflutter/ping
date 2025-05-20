// Import the functions you need from the SDKs you need
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
    apiKey: "AIzaSyBZmTuB7UejW9oGNkR5-HeGNBY1a93fq9o",
    authDomain: "ping-5657e.firebaseapp.com",
    projectId: "ping-5657e",
    storageBucket: "ping-5657e.firebasestorage.app",
    messagingSenderId: "565573250233",
    appId: "1:565573250233:web:8902c48665d3d66c72ff68"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
  playCustomSound();
});
function playCustomSound() {
  const audio = new Audio('assets/sound/beep_sound.mp3');
  audio.play().catch((error) => console.log('Autoplay prevented:', error));
}