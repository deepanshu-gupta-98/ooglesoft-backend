const db  = require ('../Model')
const Messageconfig = require('../config/messageConfing')
const Contactusmodal  = db.contactus

module.exports.contactUsAdd = async(req ,res)=>{
    try {
        console.log(req.body);
        
        await Contactusmodal.create(req.body).then((resp)=>{
            res.status(200).json({
                message : `${Messageconfig.CREATE}`,
                status : true
            })
        }).catch((err)=>{
            res.status(500).json({
                message : err.message,
                status  : false
            })
        })
    } catch (error) {
        res.status(400).json({
            message : error.message,
            status  : false
        })
    }
}




