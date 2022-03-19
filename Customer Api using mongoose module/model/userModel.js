let mongoose = require("mongoose");
mongoose.pluralize(null); // to avoid plural naming of collection ex-> customers

// schema is use to create the structure for the collection
let userSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    user_type: {type: String, required: true}
});

//using schema we have to create the model
//1st param collection name,
//2nd param collection schema definition
let userModel = mongoose.model("User", userSchema);


module.exports = userModel;