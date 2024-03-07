
const http = require("http");
const express = require('express');
const socketio = require("socket.io");


const app = express();
const server = http.createServer(app);
const port = 3000;


const io = socketio(server);

users = {};

io.on("connection",(socket)=>{
    console.log("connected")
    socket.on("new-user-joined",(username)=>{
        users[socket.id]=username
        console.log(users);
    })
})
app.use(express.static(__dirname+'/public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
server.listen(port,()=>{
    console.log("server run in port number"+port);
});

