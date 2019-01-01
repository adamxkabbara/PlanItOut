  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAFvK2LHQq_wLaGdM4vHKJIdlptJLZElx8",
    authDomain: "plan-it-out-1.firebaseapp.com",
    databaseURL: "https://plan-it-out-1.firebaseio.com",
    projectId: "plan-it-out-1",
    storageBucket: "",
    messagingSenderId: "57369504259"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;