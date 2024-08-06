import { query } from "express";
import { sequelize } from "../model/database.js";

 const getPollbyOption =
    async (option_id)=>{
        const query = 'select p.isLocked from options as o join polls as p on p.poll_id = o.poll_id where o.option_id = ?'
        const getpoll = await sequelize.query(query,{
            replacements: [option_id],
            type: sequelize.QueryTypes.SELECT
        })
        .then(data=>{
            console.log(data[0])
            return data[0]
        })
        .catch(err=>{
            console.error('loi getPoll',err)
        })
        return getpoll
    }
    const getOptionByPoll = async (poll_id)=>{
        const query = 'select option_id,content from options where poll_id = ?'
        const getpoll = await sequelize.query(query,{
            replacements: [poll_id],
            type: sequelize.QueryTypes.SELECT
        })
        .then(data=>{
            console.log(data[0])
            return data[0]
        })
        .catch(err=>{
            console.error('loi getPoll',err)
        })
        return getpoll
    }

const createPoll = async (poll)=>{
    var date = new Date();
    date = date.getFullYear() + '-' +
    ('00' + (date.getMonth()+1)).slice(-2) + '-' +
    ('00' + date.getDate()).slice(-2) + ' ' + 
    ('00' + date.getHours()).slice(-2) + ':' + 
    ('00' + date.getMinutes()).slice(-2) + ':' + 
    ('00' + date.getSeconds()).slice(-2);
    poll.createdAt = date
    const query = 'insert into `polls`(title,customerId,createdAt,isLocked) values(?,?,?,?)'
    
    const createpoll = await sequelize.query(query,{
        replacements: [poll.title, poll.customerId, poll.createdAt, poll.isLocked],
        type: sequelize.QueryTypes.INSERT
    })
    .catch(err=>{
        console.error('loi createpoll',err)
    })

    return createpoll
}

const getPoll = async (poll_id)=>{
    const query = 'select * from polls where poll_id = ?'
    const getpoll = await sequelize.query(query,{
        replacements: [poll_id],
        type: sequelize.QueryTypes.SELECT
    })
    .then(data=>{
        console.log(data[0])
        return data[0]
    })
    .catch(err=>{
        console.error('loi getPoll',err)
    })
    return getpoll
}
const update = async (poll)=>{
    const query = 'update polls set title = ?,isLocked = ? where poll_id = ?'
    const update = await sequelize.query(query,{
        replacements: [poll.title,poll.isLocked,poll.poll_id],
        type: sequelize.QueryTypes.UPDATE
    })
    .then(()=>{
        return 'Update poll success'    
    })
    .catch(err=>{
        console.error('loi updatePoll',err)
    })

    return update
}

const deletePoll = async (poll_id)=>{
    const query = 'delete from polls where poll_id = ?'
    const deletepoll = await sequelize.query(query,{
        replacements: [poll_id],
        type: sequelize.QueryTypes.DELETE
    })
    .then(()=>{
        return 'Delete poll success'
    })
    .catch(err=>{
        console.error('loi deletePoll',err)
    })
}
// const poll = {
//     title :'testvip',
//     user_id:1,
//     createdAt:date,
//     isLocked: 1
// }

export {update,createPoll,getPoll,deletePoll,getPollbyOption,getOptionByPoll}