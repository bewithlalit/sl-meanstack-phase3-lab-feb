let express = require("express");
let customerRouter = require("./router/customerRouter")
let db = require("./config/dbConfig")
let app = express()
let port = 9091;

db.dbConnection; //connect to database
app.use(express.json());

app.use("/api/customer", customerRouter);


app.listen(port, ()=>console.log(`Application running on port number ${port}`))