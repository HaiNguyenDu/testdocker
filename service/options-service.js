
import { sequelize } from "../model/database.js";


const createOption = async (option)=>{
    var date = new Date();
    date = date.getFullYear() + '-' +
    ('00' + (date.getMonth()+1)).slice(-2) + '-' +
    ('00' + date.getDate()).slice(-2) + ' ' + 
    ('00' + date.getHours()).slice(-2) + ':' + 
    ('00' + date.getMinutes()).slice(-2) + ':' + 
    ('00' + date.getSeconds()).slice(-2);
    option.createdAt = date
    const query = 'insert into `options`(content,createdAt,poll_id) values(?,?,?)'
    
    const createOption = await sequelize.query(query, {
        replacements: [option.content, option.createdAt, option.poll_id],
        type: sequelize.QueryTypes.INSERT
    });

    return createOption
}
// var date = new Date();
// date = date.getFullYear() + '-' +
// ('00' + (date.getMonth()+1)).slice(-2) + '-' +
// ('00' + date.getDate()).slice(-2) + ' ' + 
// ('00' + date.getHours()).slice(-2) + ':' + 
// ('00' + date.getMinutes()).slice(-2) + ':' + 
// ('00' + date.getSeconds()).slice(-2);
// const option = {
//     content:'test1',
//     createAt:date,
//     poll_id:1
// }
// createOption(option)
const getOption = async (option_id)=>{
    const query = 'select * from options where option_id = ?'
    const getOption = await sequelize.query(query,{
        replacements: [option_id],
        type: sequelize.QueryTypes.SELECT
    })
    .then(data=>{
        console.log(data[0])
        return data[0]
    })
    .catch(err=>{
        console.error('loi getOption',err)
    })
    return getOption
}



const update = async (option)=>{
    const query = 'update options set content = ? where option_id = ?'
    const update = await sequelize.query(query,{
        replacements: [option.content,option_id],
        type: sequelize.QueryTypes.UPDATE
    })
    .then(()=>{
        return 'Update Option success'
    })
    .catch(err=>{
        console.error('loi updateOption',err)
    })

    return update
}

const deleteOption = async (option_id)=>{
    const query = 'delete from options where option_id = ?'
    const deletepoll = await sequelize.query(query,{
        replacements: [option_id],
        type: sequelize.QueryTypes.DELETE
    })
    .then(()=>{
        return 'Delete option success'
    })
    .catch(err=>{
        console.error('loi deleteOption',err)
    })
}

export {createOption,getOption,update,deleteOption}