code JavaScript
downloadcontent_copy
expand_less
   importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// এখানেও আবার JSON এর তথ্যগুলো দিতে হবে
firebase.initializeApp({
    apiKey: "AIzaSyDsPnR7m8KlAAiPbJ-NsY44VOUJvOxM_Nw",
    projectId: "khida-lagsa",
    messagingSenderId:"352833727932",
    appId: "1:352833727932:web:4ab72beeae51d6ad918fb9"
        
});

const messaging = firebase.messaging();

// ব্যাকগ্রাউন্ডে নোটিফিকেশন আসলে কি হবে
messaging.onBackgroundMessage((payload) => {
    console.log('মেসেজ পাওয়া গেছে: ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});