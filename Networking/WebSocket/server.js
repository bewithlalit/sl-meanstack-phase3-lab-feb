let express = require("express");

let app = express();

// create the reference of websocket with the help of expressjs with in IIFE style
let ws = require("express-ws")(app);

// first we will open the static web page
app.get("/", (req, res)=> {
    res.sendFile(__dirname+"/index.html");
})

// server want to receive web socket request from client
app.ws("/", (socket, req)=> {
    console.log("Client connected successfully...........");
    // this code is use to receive the message from browser ws client
    socket.on("message",(msg)=> {
        console.log(msg);
        socket.send("Welcome Mr/Miss "+msg);
    })

    // server send the message to client application
    socket.send("Hello client, Welcome to web socket programming")
})

app.listen(9090, ()=> console.log("Server running on port number 9090"));