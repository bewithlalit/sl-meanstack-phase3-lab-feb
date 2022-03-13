let mongoose = require("mongoose");
mongoose.pluralize(null); // to avoid plural naming of collection ex-> customers

// schema is use to create the structure for the collection
let customerSchema = mongoose.Schema({
    _id: {type: Number, required: true},
    cname: {type: String, required: true},
    cage: {type: Number, required: true},
    phoneNo: {type: Number, required: false}
});

//using schema we have to create the model
//1st param collection name,
//2nd param collection schema definition
let customerModel = mongoose.model("Customer", customerSchema);


module.exports = customerModel;