let dbCollection = require("../config/dbConfig");

exports.findAllProduct = () => {
    return dbCollection.getCollection("Product").find({}).toArray();
}

exports.storeProduct = (Product) => {
    return dbCollection.getCollection("Product").insertOne(Product);
}

exports.deleteProductById = (pid) => {
    let tempId = eval(pid);
    return dbCollection.getCollection("Product").deleteOne({_id:tempId});
}

exports.updateProductPrice = (product) => {
    return dbCollection.getCollection("Product").updateOne({_id:product._id},{$set:{price:product.price}});
}