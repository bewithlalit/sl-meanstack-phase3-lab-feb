let mongoose = require("mongoose");
let url = "mongodb://localhost:27017/meanbatch";

let dbConnection = mongoose.connect(url).
then(res=>console.log("Connected")).catch(err=>console.log(err));


module.exports = {dbConnection}