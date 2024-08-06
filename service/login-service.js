import { removeTicks } from 'sequelize/lib/utils'
import {customer} from '../model/user-model.js'
import { sequelize } from '../model/database.js'
import  jwt  from 'jsonwebtoken'
import {updateCustomer} from './user-service.js'
import nml from 'nodemailer'
import env from 'dotenv'
import bcrypt from 'bcryptjs'
import hbs from 'nodemailer-express-handlebars'
import path from 'path'
env.config()
export const checkuser= async(email,password)=>{
    const token = await customer.findOne({where :{
        email: email,
    }})
    .then((User)=>{
      
        if(bcrypt.compare(User.password,password))
            {
                var token = jwt.sign({ customerId: User.dataValues.customerId},'depzai')
                return token
            }
        else
        return null
    })
    .catch((err)=>{
        console.error(err)
    })
    return token
    
}
export const checkUserByMail = async(email)=>{
    const User = await customer.findOne({
        where:{
            email:email
        }
    })
    .then(user =>{
        
        return user.dataValues
    })
    .catch(err=>{
        console.error(err)
    })
   
    return User 
} 
export const sendotp = async(email)=>{
    const user = await checkUserByMail(email)
    console.log(user)
    if(!user)
    {
            return false
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const OTPTIME= {
        OTPTIME: Date.now()+100000
    }
    const OTP = {
        OTP: otp
    }
    const handlebarsOptions = {
        viewEngine: {
          extName: ".hbs",
          layoutsDir:  path.resolve(process.cwd(),"/resource/views/layouts"),
          defaultLayout: '',
        },
        viewPath:  path.resolve(process.cwd(),'resource/views'),
        extName: ".hbs"
      };

    const transporter = nml.createTransport({
        service:'gmail',
        auth:{
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })   
 //   transporter.use('compile', hbs(handlebarsOptions))
    const mailOptions ={
        from: process.env.SMTP_USER,
        template: 'email',
        to: user.email,
        subject: 'Your OTP Code',
        text:`Your OTP code is ${otp}`,
 
    }
    try{
    updateCustomer(OTP,user.customerId)
    updateCustomer(OTPTIME,user.customerId)
    return transporter.sendMail(mailOptions)

    }
    catch(err){
        console.error('loisendotp',err)
        return false
    }

}

export const changePW = async(password,email)=>{
    const user = await checkUserByMail(email)
    const salt = await bcrypt.genSalt(10)
    password = await bcrypt.hash(password,salt)
    return updateCustomer({password:password},user.customerId)
}