import express from 'express'
import { upload } from '../service/upload-service.js'
import responseHandler from '../handler/response-handler.js'
import { uploadfile,uploadfiles } from '../controllers/upload-controller.js'
export const upLoad_route = express.Router()

upLoad_route.post('/file',upload.single('myFile'),uploadfile)
upLoad_route.post('/files',upload.array('myFiles',3),uploadfiles)



export default upLoad_route
