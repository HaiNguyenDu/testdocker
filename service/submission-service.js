import { sequelize } from "../model/database.js";


const createSubmission = async (sub)=>{


    const query = 'insert into `submission`(customerId,option_id) values(?,?)'
    
    const createSubmission = await sequelize.query(query,{
        replacements: [sub.customerId,sub.option_id],
        type: sequelize.QueryTypes.INSERT
    })
    .catch(err=>{
        console.error('loi create submission',err)
    })

    return createSubmission
}

const getSubmission = async (option_id)=>{
    const query = 'select * from submission where option_id = ?'
    const getSubmission = await sequelize.query(query,{
        replacements: [option_id],
        type: sequelize.QueryTypes.SELECT
    })
    .then(data=>{
        console.log(data[0])
        return data[0]
    })
    .catch(err=>{
        console.error('loi getSubmisstion',err)
    })
    return getSubmission
}
const update = async (sub,option_id)=>{
    const query = 'update submission set option_id = ? where option_id = ? and customerId = ?'
    const update = await sequelize.query(query,{
        replacements: [option_id,sub.option_id,sub.customerId],
        type: sequelize.QueryTypes.UPDATE
    })
    .then(()=>{
        return 'Update submisstion success'
    })
    .catch(err=>{
        console.error('loi updatesubmisstion',err)
    })

    return update
}
export {update,getSubmission,createSubmission}