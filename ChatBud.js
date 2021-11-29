function addUser(){
    username=document.getElementById("username").value;
    localStorage.setItem("user_name", username);
    window.location="ChatBud_room.html";
}