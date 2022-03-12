let mongoClient = require("mongodb").MongoClient

let url = "mongodb://localhost:27017";

let myDb = "meanbatch";

mongoClient.connect(url, (err, client) => {
    if(!err) {
        console.log("Database connected successfully")
        let db = client.db(myDb);
    } else {
        console.log(err);
    }
    client.close();
})