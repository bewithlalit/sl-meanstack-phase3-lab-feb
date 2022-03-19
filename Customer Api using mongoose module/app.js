let express = require("express");
let customerRouter = require("./router/customerRouter");
let userRouter = require("./router/userRouter");
let db = require("./config/dbConfig")
let app = express()
let port = process.env.PORT || 9091;

db.dbConnection; //connect to database
app.use(express.json());

app.use("/api/customer", customerRouter);
app.use("/api/user", userRouter);


app.listen(port, ()=>console.log(`Application running on port number ${port}`))