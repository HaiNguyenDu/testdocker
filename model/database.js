import { Sequelize,DataTypes } from "sequelize";
export const sequelize = new Sequelize('Hotelnodejs','root','123456',{
    host:'localhost',
    dialect:'mysql'
})

await sequelize.authenticate()
.then(()=>{
    console.log('thanhcong')
})
.catch((err)=>{
    console.log(err)
})  




