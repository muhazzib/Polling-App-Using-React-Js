import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCvV-pSnt4b6uS_ioJ8VXrfzLl6PCwC_rY",
    authDomain: "saylanibymuhazzib-5bab9.firebaseapp.com",
    databaseURL: "https://saylanibymuhazzib-5bab9.firebaseio.com",
    projectId: "saylanibymuhazzib-5bab9",
    storageBucket: "saylanibymuhazzib-5bab9.appspot.com",
    messagingSenderId: "640639152429"
  };
  var fire=firebase.initializeApp(config);

  export default fire