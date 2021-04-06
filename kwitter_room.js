var firebaseConfig = {
      apiKey: "AIzaSyAnA7N1EjMqfwy45Oh4UkMQVAD5mlgtJGk",
      authDomain: "twitter-dff12.firebaseapp.com",
      databaseURL: "https://twitter-dff12-default-rtdb.firebaseio.com",
      projectId: "twitter-dff12",
      storageBucket: "twitter-dff12.appspot.com",
      messagingSenderId: "830488176856",
      appId: "1:830488176856:web:1d25af3c25f26ddb61cfad",
      measurementId: "G-YETGW13PV1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
     //ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";
function AddRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_name = childKey;
      //Start code
      console.log("Room Name - " + Room_name);
      row = "<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)' >#"+ Room_name +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html"
}
firebase