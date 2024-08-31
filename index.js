import express from 'express'
import path from 'path'
import { engine } from 'express-handlebars'
import cookieParser from 'cookie-parser'
import routes from './routes/index.js'
const app = express()
const port = 3000

app.use(cookieParser());
app.use(express.static(path.resolve(process.cwd(),'resource')))

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './resource/views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1",routes)
app.get('/api/v1/file',(req,res)=>{
    const file = path.resolve(process.cwd(),'resource/views/upfile.hbs')
    res.render(file)
})



app.listen(port,()=>{
    console.log(`Example app listening on http://localhost:${port}/api/v1/login`)
})
