let mongoClient = require("mongodb").MongoClient

let url = "mongodb://localhost:27017";

let myDb = "meanbatch";

mongoClient.connect(url, (err, client) => {
    if(!err) {
        console.log("Database connected successfully")
        let db = client.db(myDb);
        /* let cursor = db.collection("Employee").find({age: 21}); */
        let cursor = db.collection("Employee").find({});
        cursor.forEach(e => {
            console.log(e);
            client.close();
        })
    } else {
        console.log(err);
    }
})