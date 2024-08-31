import express from "express"
import multer from "multer"

const path = "/media/hainguyendu/DATA/Project vippro/Hotel nodejs/src/upload"
const storage = multer.diskStorage({
    destination:(req,file,res)=>{
        res(null,path)
    },
    filename:(req,file,res)=>{
        res(null,Date.now()+"_"+file.originalname)
    },

})

export const upload = multer({storage:storage})

