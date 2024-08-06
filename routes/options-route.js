import express from "express";
import { deleteO,createO,updateO,getO } from "../controllers/options-controller.js";
import { authenticate } from "../middleware/authenticate.js";
export const option_route = express.Router()

option_route.get('/getOption/:id',authenticate,getO)
option_route.post('/create',authenticate,createO)
option_route.delete('/delete/:id',authenticate,deleteO)
option_route.put('/update',authenticate,updateO)

export default option_route