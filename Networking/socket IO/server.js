let express = require("express");
let app = express();
// loading http module and calling server function and passing reference of express
let http = require("http").createServer(app);
// creating the reference of socket io and passing http reference using iife style
let io = require("socket.io")(http);

app.get("/", (req, res)=> {
    res.sendFile(__dirname+"/index.html");
})

io.on("connection", (socket)=> {
    console.log("Client connected......");
    socket.on("obj", (msg) => {
        console.log(msg);
        let serverReply;
        switch(msg) {
            case "hello how are you ?":
              // code block
              serverReply = "I am good Thanks"
              break;
            case "How i can help you ?":
              // code block
              serverReply = ["Shake the hands", "Go to assistant"]
              break;
            default:
              // code block
              serverReply = "Thanks for choosing us!"
          }
        socket.emit("obj1", "From Server: "+serverReply);
    });
})



http.listen(3000, ()=>console.log("Server running on port number 3000"))