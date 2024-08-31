import responseHandler from "../handler/response-handler.js"

export const uploadfile = (req,res)=>{
    const file = req.file
    if(!file)
    {
        responseHandler.notFound(res,"file not found")

    }
    else{
        responseHandler.ok(res,file,"success")
    }
}

export const uploadfiles = (req,res)=>{
    const files = req.files
    if(!files)
    {
        responseHandler.notFound(res,"file not found")

    }
    else{
        responseHandler.ok(res,files,"success")
    }
}