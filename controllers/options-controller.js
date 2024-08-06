import { getOption,createOption,update,deleteOption } from "../service/options-service.js";

export const createO = async (req,res)=>{
    const option = req.body
    poll.content = poll.content.trim()
    if(poll.content == '')
        res.status(404).json({message:'title null'})
    await createOption(option)
    .then(()=>{
        res.status(200).json({message:'success'})
    })
    .catch(err=>{
        res.status(404).json({message:'fail to create'})
    })
} 

export const deleteO = async (req,res)=>{
    const option_id = req.params.id
    await deleteOption(option_id)
    .then(()=>{
        res.status(200).json({message:'success'})
    })
    .catch(err=>{
        res.status(404).json({message:'fail to delete'})
    })
}

export const updateO = async (req,res)=>{
    const option = req.body
    await update(option)
    .then(()=>{
        res.status(200).json({message:'success'})
    })
    .catch(err=>{
        res.status(404).json({message:'fail to update'})
    })
}

export const getO = async (req,res)=>{
    const option_id = req.params.id
    await getOption(option_id)
    .then((data)=>{
        res.status(200).send(data)
    })
    .catch(err=>{
        res.status(404).json({message:'fail to getoption'})
    })
}