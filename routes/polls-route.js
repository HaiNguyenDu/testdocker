import express from 'express'
import { createP,updateP,deleteP,getP,getallobp } from '../controllers/polls-controller.js'
import { authenticate } from '../middleware/authenticate.js'
export const polls_route = express.Router()

polls_route.get('/getpoll/:id',authenticate,getP)
polls_route.post('/create',authenticate,createP)
polls_route.delete('/delete/:id',authenticate,deleteP)
polls_route.put('/update',authenticate,updateP)
polls_route.get('/getoptionsbypoll/:id',authenticate,getallobp)

export default polls_route