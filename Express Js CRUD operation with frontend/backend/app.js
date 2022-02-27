let express = require("express");
let fs = require("fs");
let cors = require("cors");

// create the reference of express module
let app = express();

// to access post request
app.use(express.json());
app.use(cors())

// create product
let products = [];

app.get("/productDetails", (req,res)=> {
    let productInfo = JSON.parse(fs.readFileSync("product.json"));
    res.json(productInfo);
})

app.post("/productStore", (req,res)=> {
    let product = req.body;
    products = JSON.parse(fs.readFileSync("product.json"));
    let result = products.find(p=>p.pid == product.pid);
    if(result == undefined) {
        products.push(product);
        fs.writeFileSync("product.json", JSON.stringify(products));
        res.send("Record stored successfully..")
    } else {
        res.send("Product Id must be unique")
    }  
})

app.get("/findProductById/:pid", (req, res) => {
    let pid = req.params.pid;
    products = JSON.parse(fs.readFileSync("product.json"));
    let result = products.find(p=> p.pid == pid);
    if(result == undefined) {
        res.json({"msg": `Record not present with id as ${pid}`});
    } else {
        res.json(result);
    }
})

app.delete("/deleteProductInfo/:pid", (req,res) => {
    let pid = req.params.pid;
    products = JSON.parse(fs.readFileSync("product.json"));
    let index = products.findIndex(p=>p.pid == pid);
    if(index < 0) {
        res.send("Product not present with pid as "+pid);
    } else {
        products.splice(index, 1);
        fs.writeFileSync("product.json", JSON.stringify(products));
        res.send("Product deleted Successfully");
    }
})

app.patch("/updateProductDetails", (req,res)=> {
    let product = req.body;
    products = JSON.parse(fs.readFileSync("product.json"));
    let index = products.findIndex(p=>p.pid == product.pid);
    if(index < 0) {
        res.send("Product not present with pid as "+product.pid);
    } else {
        products[index].price = product.price;
        products[index].url = product.url;
        fs.writeFileSync("product.json", JSON.stringify(products));
        res.send("Product updated Successfully");
    }
})










app.listen(9090, ()=> console.log("Server running on port number 9090"))