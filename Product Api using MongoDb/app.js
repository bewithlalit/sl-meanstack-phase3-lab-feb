let express = require("express");
let dbConnection = require("./config/dbConfig");  //load user defined module
let productRouter = require("./router/productRouter");
let app = express();

dbConnection.connect(); //connect the database
app.use(express.json());

app.use("/api/product", productRouter);







app.listen(9090, ()=> console.log("Server running on port number 9090"));