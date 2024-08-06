import {selectAllCustomer,selectCustomerWithId,deleteCustomer,updateCustomer,createCustomer} from '../service/user-service.js'
import {authenticate} from '../middleware/authenticate.js'
import multer from 'multer'
import path from 'path'
export const updateCtm= async(req,res)=>{
    const ctm = req.body
    const result = await updateCustomer(ctm)
    res.send('success')
}
export const deleteCtm = async(req,res)=>{
    const id = req.params.id
    const result = await deleteCustomer(id)
    res.send('success')
}

export const getAllctm = async(req,res)=>{
     const listCustomer = await selectAllCustomer()
     res.send(listCustomer)
} 

export const getCtmById = async (req,res)=>{
    const id = req.params.id
    console.log(id)
    const Ctm = await selectCustomerWithId(id)
    res.send(Ctm)
}

export const createCtm = async (req,res)=>{
    console.log(req.body)
      const new_user = req.body
      const result = await createCustomer(new_user)
      if(result)
        {
            res.send(result)
        }
        else {
            res.send('fail register')
        }
}
export const saveFile = async (req,res)=>{
    const maxSize = 2 * 1024 * 1024
    let storage = multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, path.resolve(process.cwd(),"/resources/static/assets/uploads/"));
        },
        filename: (req, file, cb) => {
          console.log(file.originalname);
          cb(null, file.originalname);
        },
      });
    let uploadFile = multer({
        storage: storage,
        limits: { fileSize: maxSize },
      }).single("file");
      
}
