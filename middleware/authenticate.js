import jwt from 'jsonwebtoken'

export function authenticate(req,res,next)
{   
    const token =req.cookies.token
    console.log(token)
    if (!token) {
        res.send('failacesstoken')
    }
    else{
        try{
            const check = jwt.verify(token,'depzai')
            req.user = check
            next()
        }
        catch(err)
        {
            res.status(401).json({message:"invalidtoken"})
        }
    }  
}