import express from 'express'
import path from 'path'
import {authenticate} from '../middleware/authenticate.js'
export const book_route = express.Router()
book_route.get('',authenticate,(req,res)=>{
     const file = path.resolve(process.cwd(),'resource/views/book.hbs')
     res.render(file)
})
book_route.post('/search',(req,res)=>{
     res.render('search')
})

export default book_route;