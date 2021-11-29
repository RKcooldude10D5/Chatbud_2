const firebaseConfig = {
      apiKey: "AIzaSyBkHD3jkX9fHz5aRSI4GcQsBoWPwB-AcBo",
      authDomain: "chatbud-12912.firebaseapp.com",
      databaseURL: "https://chatbud-12912-default-rtdb.firebaseio.com",
      projectId: "chatbud-12912",
      storageBucket: "chatbud-12912.appspot.com",
      messagingSenderId: "587781348857",
      appId: "1:587781348857:web:b4d12b7d8bbbe8eda27128"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome, " + user_name + "!";
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref ("/").child(room_name).update({
            purpose: "Adding room_name"
          });
          localStorage.setItem("room_name", room_name);
          window.location="ChatBud_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room_name-" + Room_names);
       row="<div class='room_name' id=" + Room_names + " onclick='RedirectToRoomName(this.id)'>" + Room_names + "</div> <hr>";
       document.getElementById("output").innerHTML += row;
  });});}    
getData();
function RedirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="ChatBud_page.html";
}
function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.hmtl";
}