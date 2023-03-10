const mongoose = require('mongoose');


const approvalSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    password:{
        type:String,
    },
    approval :{
        type : Number,
        required : [true,'choose a value']
    }

});

module.exports = mongoose.model('Approvals',approvalSchema);

