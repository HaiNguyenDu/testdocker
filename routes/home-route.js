import express from 'express'
import { authenticate } from '../middleware/authenticate.js'
import path from 'path'
export const home_route = express.Router()


home_route.get('',authenticate,(req,res)=>{
    const file = path.resolve(process.cwd(),'resource/views/home.hbs')
    
    res.status(200).render(file)
})

export default home_route