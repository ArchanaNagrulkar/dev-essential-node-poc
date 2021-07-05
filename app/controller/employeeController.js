const Employee = require('../model/employee');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
exports.employee_register = async (req, res) => {
    try{
        let employee = await Employee.findOne({'email': req.body.email});
        if(employee){
            res.json({"msg": "Employee data already present in system !! Kindly login!"});
        }else{
            const newEmp = new Employee();
            newEmp.name = req.body.name;
            newEmp.email = req.body.email;
            newEmp.password = req.body.password;
            newEmp.employee_id = req.body.employee_id;
            newEmp.designation = req.body.designation;

            await newEmp.save();
            res.json({'msg':"Employee registered successfully!!","emplyoee":newEmp});
    
        }
    }
    catch(error){
        console.error(error);
        res.json({'error':error.message});
    }

};

exports.employee_login = async (req,res) => {
    try{
        let employee = await Employee.findOne({'email':req.body.email});
        if(!employee || !bcrypt.compareSync(req.body.password, employee.password) ){
            res.json({"msg":"Authentication failed"});
        }
        else {
            const ACCESS_TOKEN = jwt.sign(req.body,process.env.ACCESS_TOKEN_SECRET);
            res.json ({"Access_token":ACCESS_TOKEN});
        }
    }
   catch(error){
        console.error(error);
        res.json({'error':error.message});
   }
};

exports.get_employess = async (req,res) => {
    try{
        let employees = await Employee.find();
        res.json({"emplyees":employees});
    }
    catch(error){
        console.error(error);
        res.json({'error':error.message});
    }
}

exports.get_employee_by_id = async (req,res) => {
    try{
        let id = req.params.id;
        let emp = await Employee.findOne({'_id':id});
        if(!emp){
            res.json({'msg': "employee record not found"});
        }
        res.json({'msg':"Record found", "employee":emp})
    }
    catch(error){
        res.json({"error":error.message});

    }
       
     
}
exports.delete_employee_by_id = async (req, res) =>{
    try{
        let emp = await Employee.deleteOne({"_id":req.params.id});
        res.json({"msg":"Employee record deleted successfully!!"})
    }
    catch(error){
        console.error(error);
        res.json({"error":error.message});
    }
};