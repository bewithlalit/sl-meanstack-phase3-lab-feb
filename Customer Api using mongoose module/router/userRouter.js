let router = require("express").Router();
let userController = require("../controller/userController");

router.post("/register", userController.userRegistration);
router.post("/signIn", userController.signIn);

module.exports=router;