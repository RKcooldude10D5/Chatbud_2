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
  room_name=localStorage.getItem("room_name");
  document.getElementById("room_label").innerHTML=room_name;
  function send(){
      mes=document.getElementById("message").value;
    firebase.database().ref(room_name).push({
      like:0,
      name:user_name,
      message:mes
    });
document.getElementById("message").value=" ";
  }
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
    childData = childSnapshot.val();
    if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
      console.log(message_data);
      console.log(firebase_message_data);

      name_with_tag=message_data['name'];
      message=message_data['message'];
      like=message_data['like'];

      name_with_tag="<h4>" + name_with_tag + "<img class='user_tick' src='tick.png'></h4>";
      message_with_tag="<h4 class='message_h4'>" + message + "</h4>";
      like_button="<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='update_like(this.id)'>";
      span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>" + like + "</span> </button> <hr>";
      row= name_with_tag +message_with_tag +like_button +span_with_tag;
      document.getElementById("output").innerHTML +=row;
  }});
  });
  }
  getData();
  function update_like(message_id){
    console.log(message_id);
    button_id= message_id;
    likes=document.getElementById(button_id).value;
    update_likes=Number(likes) + 1;
    console.log(update_likes);
    firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes
    });
  }
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
  }