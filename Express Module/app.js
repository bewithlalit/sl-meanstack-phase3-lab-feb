// load module
let express = require("express");
let bodyParser = require("body-parser");
let fs = require("fs");
loginDetails = [];
loginDetails = JSON.parse(fs.readFileSync("login.json"));

// we have to create the reference of express module
let app = express();

app.use(bodyParser.urlencoded({extended: true})); // to access the form body data

app.get("/sayHello", (req, res)=> {
    console.log("client send the request");
    res.send("Welcome to simple express Application");
})

app.get("/aboutus", (req,res) => {
    res.send("About Us Page")
})

app.get("/contactus", (req,res) => {
    res.send("Contact Us page")
})

app.get("/info", (req, res) => {
    res.send("<font color=red>Welcome to express JS</font>")
})

app.get("/openHtml", (req, res) => {
    /* res.sendFile("E:\\simplilearn\\liveClasses\\gitClass\\sl-meanstack-phase3-lab-feb\\Express Module\\sample.html"); */
    res.sendFile(__dirname+"\\sample.html");
})

app.get("/loginGet", (req, res) => {
    res.sendFile(__dirname+"\\loginGet.html")
})

app.get("/loginPost", (req, res) => {
    res.sendFile(__dirname+"\\loginPost.html")
})

app.get("/checkUser", (req, res) => {
    let email = req.query.email;
    let pass = req.query.pass;
    let result = loginDetails.find(item => item.email == email && item.pass == pass) 
    if (result!=undefined) {
        res.send("Successfully Logged In")
    } else {
        res.send("Wrong Password Please try correct credentials")
    }
})

app.post("/checkUser", (req,res) => {
    let loginData = req.body;
    /* console.log(loginData); */
    let result = loginDetails.find(item => item.email == loginData.email && item.pass == loginData.pass)
    if (result!=undefined) {
        res.send("Successfully Logged In")
    } else {
        res.send("Failure please try once again");
    }
})

app.get("/signUpPage", (req, res) => {
    res.sendFile(__dirname+"\\signUp.html")
})

app.post("/signUp", (req, res) => {
    let signUp = req.body;
    if(loginDetails.length > 0) {
        let result = loginDetails.find(item => item.email == signUp.email);
        if(result == undefined) {
            loginDetails.push(signUp);
            fs.writeFileSync("login.json",JSON.stringify(loginDetails));
            res.send("Account Created Successfully");
        } else {
            res.send("Email must be unique");
        }
    } else {
        loginDetails.push(signUp);
        fs.writeFileSync("login.json",JSON.stringify(loginDetails));
        res.send("Account Created Successfully");
    }
})

app.get("/", (req, res)=> {
    res.sendFile(__dirname+"\\index.html");
})

app.listen(9090, ()=> console.log("Server running on port number 9090"))