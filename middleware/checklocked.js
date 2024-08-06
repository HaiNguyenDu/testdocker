import { getPollbyOption } from "../service/polls-service.js";

const checklocked = async (req,res,next)=>{
    const optionid = req.body.option_id
    const isloked = await getPollbyOption(optionid)
    if(isloked==1)
    {
        res.json({message:'ko the submiss vi da khoa'})
    }
    else{
        next()
    }

}
export {checklocked}