const Approvals = require('../models/approvalSchema');

exports.getApproval = async (req,res,next) => {
try{
    const approval = await Approvals.find();
    // console.log(approval);
    return res.status(200).json({
        success :true,
        data : approval
    });}
    catch(err){
        return res.status(500).json({
            success: false,
            Error : "server error"
        })
    }
}



exports.updateElement = async (req,res,next) => {
    let id = req.params.id;
    console.log(id);
    if(!await Approvals.findById(id)){
        return res.status(404).json({
            success : false,
            message : "cannot find the element!"
        });
    }else{
        try{
            const updatedElement = await Approvals.updateOne({_id : id} , req.body);
            return res.status(200).send(updatedElement);
        }catch(err){
            return res.status(500).json({
                success : false,
                error : "Server error"
            })
        }
    }
}


   
