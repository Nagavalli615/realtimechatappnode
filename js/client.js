//const socket = io();
//const socket = io.connect('http://localhost:3000'); // Make sure the URL matches your server


const username = "User123";

do{
    username = prompt("Enter Your Name");
}while(!username)

socket.emit("new-user-joined",username);
