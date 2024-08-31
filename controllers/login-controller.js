import {checkUserByMail, checkuser,sendotp} from '../service/login-service.js'
import path from 'path'
import nml from 'nodemailer'
import env from 'dotenv'
import jwt from'jsonwebtoken'
import { updateCustomer } from '../service/user-service.js'
import { changePW } from '../service/login-service.js'
import responseHandler from '../handler/response-handler.js'
env.config()
 const getAccessToken = async(req,res)=>{
    const email = req.body.email
    console.log(email)
    const password = req.body.password
    const token = await checkuser(email,password)
    
    if(token)
    {
       
        responseHandler.ok(res,{token:token},"success")
        
    }
    else{
        responseHandler.unauthenticate(res,"Fail to login")
    }
}

 const sendOtp = async (req,res)=>{
    const email = req.body.email
    const sOtp = await sendotp(email)
    .then(data=>{
      responseHandler.ok(res,{},"Send OTP success")
      
    })
    .catch(err=>{
      responseHandler.notFound(res,"fail to send otp now")
    })
    

}
const confirm = async (req, res) => {
    const { otp,email } = req.body;
    const user = await checkUserByMail(email)
    const timenow = Date.now()
    var sum = 0
    try {
      if (user.OTP === otp&&timenow<user.OTPTIME) {
        updateCustomer({OTP:null},user.customerId)
        updateCustomer({OTPTIME:null},user.customerId)
        var token = jwt.sign({ customerId: user.customerId},'depzai')
        responseHandler.ok(res,{token:token},"confirm ")
   
      } else {
        res.status(400).json({ message: 'invalid' });
      }
    } catch (error) {
      console.error('sai:', error);
      res.status(500).json({ message: 'fail' });
    }
}

const newPW = async (req,res)=>{
    const {password,email} = req.body
    await changePW(password,email)
    .then(()=>{
      res.status(200).json({message:'success'})
    })
    .catch(()=>{
      res.status(400).json({message:'fail to update password'})
    })
}
export{getAccessToken,sendOtp,confirm,newPW}