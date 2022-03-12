let mongoClient = require("mongodb").MongoClient

let url = "mongodb://localhost:27017";

let myDb = "meanbatch";

mongoClient.connect(url, (err, client) => {
    if(!err) {
        console.log("Database connected successfully")
        let db = client.db(myDb);
        db.collection("Employee").updateMany({_id:8}, {$set: {age:27}}, (err1, res) => {
            if(!err) {
                if(res.matchedCount > 0 && res.modifiedCount > 0) {
                    console.log("Record updated successfully")
                }
                 else if(res.matchedCount > 0 && res.modifiedCount == 0) {
                    console.log("No change in value so can't update");
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