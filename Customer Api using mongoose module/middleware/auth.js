let jwt = require("jsonwebtoken");

let verifyToken = async (req, res, next)=> {
    let token = req.headers.authorization;
    if(!token) {
        return res.send("Access denied / unauthorized user!")
    } 
    // verifying token
    try {
        let verifyTokenValue = await jwt.verify(token, "my-key");
        if(!verifyTokenValue) {
            res.send("Unauthorized User!")
        }
        req.role = verifyTokenValue;
        next(); // if valid token present go to next step
    } catch(Ex) {
        res.send(Ex);
    }
}

let isUser = async (req, res, next) => {
    if(req.role.user_type== "user") {
        console.log("Normal User");
        next();
    } else {
        res.send("UnAuthorized User, you can't access this resource");
    }
}

let isAdmin = async (req, res, next) => {
    if(req.role.user_type== "Admin") {
        console.log("Admin User");
        next();
    } else {
        res.send("UnAuthorized User, you can't access this resource");
    }
}

module.exports = {verifyToken, isUser, isAdmin}