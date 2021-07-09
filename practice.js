 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCXzhtwlLzYDtYgqw49R-b_irWNLODLMwQ",
    authDomain: "kwitter-9f5c9.firebaseapp.com",
    databaseURL: "https://kwitter-9f5c9-default-rtdb.firebaseio.com",
    projectId: "kwitter-9f5c9",
    storageBucket: "kwitter-9f5c9.appspot.com",
    messagingSenderId: "375494067261",
    appId: "1:375494067261:web:654d03f0d10c22b4b7d654"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      var user_name=document.getElementById("input").value;
      firebase.database().ref('/').child(user_name).update({
          Purpose:"adding the user"
      });
  }