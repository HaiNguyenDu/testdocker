import {update,getSubmission,createSubmission} from '../service/submission-service.js'

export const createS = async (req,res)=>{
    const submission = req.body
    await createSubmission(submission)
    .then(()=>{
        res.status(200).json({message:'success'})
    })
    .catch(err=>{
        res.status(404).send(err)
    })
} 

export const updateS = async (req,res)=>{
    const sub = req.body
    const option_id = req.body.new
    await update(sub,option_id)
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch(err=>{
        res.status(404).send(err)
    })
}

export const getAllSubmissionByOption = async (req,res)=>{
    const option_id = req.params.id
    await getSubmission(option_id)
    .then((data)=>{
        res.status(200).send(data)
    })
    .catch(err=>{
        res.status(404).send(err)
    })
}