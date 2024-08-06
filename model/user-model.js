import { sequelize } from '../model/database.js';
import { DataTypes } from 'sequelize';


export const customer = sequelize.define('customers',{
    customerId:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true,
        validate:{len:[0,4]}
    },
    name:{
        type:DataTypes.STRING,
        validate:{len:[0,30]}
    },
    email:{
        validator:{
            isEmail:true,
        },
        type:DataTypes.STRING,
    },
    password:{
        type:DataTypes.STRING
    },
    gender:{
        type:DataTypes.BOOLEAN
    },
    date:{
        type:DataTypes.DATEONLY,
        validate:{
            isBefore:'2006-01-01',
            isAfter:'1924-01-01'
        }
    },
    cccd:{
        type:DataTypes.STRING,
        validate:{
            isNumeric:true,
            len:[0,12]
        },
    },
    adrress:{
        type:DataTypes.STRING
    },
    OTP:{
        type:DataTypes.STRING
    },
    OTPTIME:{
        type:DataTypes.DATE
    }
    
}, {
    tableName:'customer'
})

sequelize.sync()
.then(()=>{
    console.log('da dong bo hoa voi co so du lieu')
})

.catch(err=>{
    console.error("ko the tao user",err)
})

// const customer = {
//     customerId:"C002",
//     name:"Nguyen Duy Hung",
//     email:"Nguyenduyhair@gmail.com",
//     password:'123123132',
//     gender:1,
//     date:"2005-01-01",
//     cccd:'042204001000',
//     adrress:'Da Nang'
// }

 