let mongoClient = require("mongodb").MongoClient

let url = "mongodb://localhost:27017";

let myDb = "meanbatch";

mongoClient.connect(url, (err, client) => {
    if(!err) {
        console.log("Database connected successfully")
        let db = client.db(myDb);
        db.collection("Employee").deleteOne({_id:3}, (err1, res) => {
            if(!err1) {
                if(res.deletedCount > 0) {
                    console.log("Record deleted successfully");
                } else {
                    console.log("Record not present");
                }
            } else {
                console.log(err1)
            }
            client.close();
        })
    } else {
        console.log(err);
    }
})