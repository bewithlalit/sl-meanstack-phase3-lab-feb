let mongoClient = require("mongodb").MongoClient

let url = "mongodb://localhost:27017";

let myDb = "meanbatch";

mongoClient.connect(url, (err, client) => {
    if(!err) {
        console.log("Database connected successfully")
        let db = client.db(myDb);
        let emp = {_id:3, name: "Alex", age:26};
        db.collection("Employee").insertOne(emp, (err1, res) => {
            if(!err1) {
                console.log("Record inserted successfully");
                console.log(res);
            } else {
                console.log(err1)
            }
            client.close();
        })
    } else {
        console.log(err);
    }
})