let express = require("express");

let app = express();
let empObj = {name:"Lalit", age:21, id: 1};
let employees = [
    {name:"Robert", age:21, id: 1},
    {name:"Xyz", age:78, id: 2},
    {name:"Micahel", age:91, id: 3},
    {name:"Simon", age:25, id: 4}
]

app.use(express.json()); //enable post json data from http request


app.get("/sayHello", (req,res)=> {
    res.send("Welcome to simple rest API");
})

app.get("/sayJson", (req,res)=> {
    res.json({"msg": "Welcome simple json message"})
})

//http://localhost:9090/empInfo
app.get("/empInfo", (req,res)=> {
    res.json(empObj); //automatically convert obj into json
})

app.get("/allEmployees", (req,res)=> {
    res.json(employees);
})

app.get("/singleQueryParam", (req,res)=> {
    let name = req.query["name"];
    res.send("Welcome user "+name);
})

app.get("/multipleQueryParam", (req,res)=> {
    let name = req.query["name"];
    let pass = req.query["pass"];
    if(name=="Lalit" && pass=="1234") {
        res.send("Successfully Logged In")
    } else {
        res.send("Faliure try again!")
    }
})

app.get("/singlePathParam/:user", (req,res) =>{
    let user = req.params.user;
    res.send("Welcome user to path param "+user);
})

app.get("/multiplePathParam/:user/:pass", (req,res) =>{
    let user = req.params.user;
    let pass = req.params.pass;
    if(user=="Lalit" && pass=="1234") {
        res.send("Successfully Logged In")
    } else {
        res.send("Faliure try again!")
    }
})

app.post("/storeEmployee",(req,res) =>{
    let emp = req.body;
    console.log(emp);
    res.send("Data Stored");
})

app.patch("/updateEmployeeSalary",(req,res) =>{
    let emp = req.body;
    console.log(emp);
    res.send("emplyee salary updated");
})

app.put("/updateEmployee",(req,res) =>{
    let emp = req.body;
    console.log(emp);
    res.send("employee updated successfully");
})

app.delete("/deleteEmployeeInfo/:id", (req,res) =>{
    let id = req.params.id;
    res.send("Employee deleted Successfully with id "+id);
})

app.listen(9090, ()=>console.log("Server running on port number 9090"))
