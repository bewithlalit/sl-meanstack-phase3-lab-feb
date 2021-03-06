let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";
let dbClient;

exports.connect = () => {
    mongoClient.connect(url).then(res => {
        console.log("Database connected succesfully.......")
        dbClient = res;
    }).catch(err => {
        console.log(err)
    })
}

exports.getCollection = (name) => {
    return dbClient.db("meanbatch").collection(name);
}
