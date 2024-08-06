import {update,createPoll,getPoll,deletePoll,getOptionByPoll} from '../service/polls-service.js'

export const getallobp = async (req,res)=>{
    const poll_id = req.params.id
    await getOptionByPoll(poll_id)
    .then(data=>{
        res.status(200).send(data)
    })
    .catch(err=>{
        res.status(404).send(err)
    })


}
export const createP = async (req,res)=>{
    const poll = req.body
    poll.title = poll.title.trim()
    if(poll.title == '')
        res.status(404).json({message:'title null'})
    await createPoll(poll)
    .then(()=>{
        res.status(200).json({message:'success'})
    })
    .catch(err=>{
     res.status(404).send(err)
    })
} 

export const deleteP = async (req,res)=>{
    const poll_id = req.params.id
    await deletePoll(poll_id)
    .then(()=>{
        res.status(200).json({message:'success'})
    })
    .catch(err=>{
        res.status(404).send(err)
    })
}

export const updateP = async (req,res)=>{
    const poll = req.body
    await update(poll)
    .then(()=>{
        res.status(200).json({message:'success'})
    })
    .catch(err=>{
        res.status(404).send(err)
    })
}

export const getP = async (req,res)=>{
    const poll_id = req.params.id
    await getPoll(poll_id)
    .then((data)=>{
        res.status(200).send(data)
    })
    .catch(err=>{
        res.status(404).send(err)
    })
}