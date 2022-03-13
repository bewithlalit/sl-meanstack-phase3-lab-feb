let customerRepository = require("../repository/customerRepository");

let storeCustomerInfo = async(req, res)=> {
    let customer = req.body;
    try {
        let result = await customerRepository.storeCustomer(customer);
        res.send(result);
    } catch(Ex) {
        res.send(Ex);
    }
}

let updateCustomerAge = async(req, res)=> {
    let customer = req.body;
    try{
        let result = await customerRepository.updateCustomerAge(customer);
        if(result.modifiedCount>0){
            res.send("Record updated successfully")
        }else if(result.matchedCount>0){
            res.send("Record exist but didn't update")
        }else {
            res.send("Record not present")
        }
    } catch(Ex) {
        console.log(Ex);
    }
}

let deleteCustomerInfo = async(req, res)=> {
    let id = req.params.id;
    try{
        let result = await customerRepository.deleteCustomerInfo(id);
        res.send(result);
    } catch(Ex) {
        res.send(Ex)
    }
}

let findAllCustomer = async(req, res)=> {
    let result = await customerRepository.getAllCustomer();
    res.json(result);
}

module.exports = {storeCustomerInfo, updateCustomerAge, deleteCustomerInfo, findAllCustomer}