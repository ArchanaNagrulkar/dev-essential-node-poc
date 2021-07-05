const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

let empSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    employee_id :{
        type: String,
        required: true
    },
    designation :{
        type: String,
        required: true
    }    

});


empSchema.pre("save", async function(next) {
    try{
        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(this.password,salt);
        this.password = hash;
    }
    catch(err){
       console.error(err);
    }
   return next();

});

const Employee = mongoose.model('Employee',empSchema);

module.exports = Employee;