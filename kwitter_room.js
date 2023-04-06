var firebaseConfig = {
  apiKey: "AIzaSyBTVZ1Hsop9Jt8k0mHEXegYSRWoZS3cQnE",
  authDomain: "igishka2-tssixm.firebaseapp.com",
  databaseURL: "https://newagent-fhepbr.firebaseio.com",
  projectId: "igishka2-tssixm",
  storageBucket: "igishka2-tssixm.appspot.com",
  messagingSenderId: "14896371054",
  appId: "1:14896371054:web:fc4e1d55b42d5a7f41dd7f"
};
// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

//Añade tus enlaces de Firebase

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "¡Bienvenido" + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "añadir el nombre de la sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Nombre de la sala" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach (function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
//Inicia código
  console.log(firebase_message_id);
  console.log(message_data);
  name = message_data ['name']
  message = message_data['message'];
  like = message['like'];
  name_with_tag = "<h4> "+ name +"</h4>";
  message_with_tag = "<button class= 'btn btn-warning' id="+firebase_message_id+" value= "+like+" onclick='updatelike(this.id)'>Likes :"+ like +"</button>";
}
  row = name_with_tag + message_with_tag +like_button;
  document.getElementById("output").innerHTML += row;


//Termina código
} );  }); }

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
