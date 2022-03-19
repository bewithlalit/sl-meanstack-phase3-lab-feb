let router = require("express").Router();
let customerController = require("../controller/customerController");
let auth = require("../middleware/auth");

/* router.post("/storeCustomerInfo", customerController.storeCustomerInfo);
router.put("/updateCustomer", customerController.updateCustomerAge);
router.delete("/deleteCustomerInfo/:id", customerController.deleteCustomerInfo);
router.get("/findAllCustomer", customerController.findAllCustomer); */
// for normal user
router.get("/findAllCustomer", auth.verifyToken, auth.isUser, customerController.findAllCustomer);

// for admin user
router.get("/findAllCustomer", auth.verifyToken, auth.isAdmin, customerController.findAllCustomer);
router.post("/storeCustomerInfo", auth.verifyToken, auth.isAdmin, customerController.storeCustomerInfo);
module.exports=router;