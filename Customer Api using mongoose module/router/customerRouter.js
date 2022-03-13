let router = require("express").Router();
let customerController = require("../controller/customerController");

router.post("/storeCustomerInfo", customerController.storeCustomerInfo);
router.put("/updateCustomer", customerController.updateCustomerAge);
router.delete("/deleteCustomerInfo/:id", customerController.deleteCustomerInfo);
router.get("/findAllCustomer", customerController.findAllCustomer);

module.exports=router;