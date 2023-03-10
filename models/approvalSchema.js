const mongoose = require('mongoose');


const approvalSchema = new mongoose.Schema({
    approval :{
        type : Number,
        required : [true,'choose a value']
    }

});

module.exports = mongoose.model('Approvals',approvalSchema);

