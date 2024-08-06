import express from 'express'
import user_route from './routes/user-routes.js'
import book_route  from './routes/book-routes.js'
import login_route from './routes/login-routes.js'
import home_route from './routes/home-route.js'
import polls_route from './routes/polls-route.js'
import submission_route from './routes/submission-route.js'
import options_route from './routes/options-route.js'
import path from 'path'
import { configDotenv } from 'dotenv';
import { engine } from 'express-handlebars';
import cookieParser from 'cookie-parser'
const app = express()
const port = 3000

app.use(cookieParser());
app.use(express.static(path.resolve(process.cwd(),'resource')))
//config viewEngine
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './resource/views');
//su dung cac staticfile
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//sudung cac route
app.use('/user',user_route)
app.use('/book',book_route)
app.use('/login',login_route)
app.use('/home',home_route)
app.use('/api/polls',polls_route)
app.use('/api/submissions',submission_route)
app.use('/api/options',options_route)
app.get('api/file',(req,res)=>{
    const file = path.resolve(process.cwd(),'resource/views/upfile.hbs')
    res.render(file)
})



app.listen(port,()=>{
    console.log(`Example app listening on http://localhost:${port}/login`)
})
