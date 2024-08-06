import express from "express";
import path from 'path'
import {getAccessToken,confirm, sendOtp,newPW} from '../controllers/login-controller.js'
import { authenticate } from "../middleware/authenticate.js";
export const login_route = express.Router();
login_route.get('',(req,res)=>{
    const file = path.resolve(process.cwd(),'resource/views/login.hbs')
    res.render(file)
})
login_route.post('',getAccessToken)
login_route.post('/forgotpassword',sendOtp)
login_route.post('/otpconfirmation',confirm)
login_route.post('/newpassword',authenticate,newPW)


export default login_route;