
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAxGBbtJmaDosvky_NNSJhvbLxZ87LdAiI",
    authDomain: "kwitter-989c7.firebaseapp.com",
    databaseURL: "https://kwitter-989c7-default-rtdb.firebaseio.com",
    projectId: "kwitter-989c7",
    storageBucket: "kwitter-989c7.appspot.com",
    messagingSenderId: "747995430963",
    appId: "1:747995430963:web:0f9e2110b1f6062fa62346"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}