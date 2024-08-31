import  express  from "express";
import {user_route} from "./user-routes.js"
import {book_route} from "./book-routes.js"
import {login_route} from "./login-routes.js"
import {home_route} from "./home-route.js"
import {polls_route} from "./polls-route.js"
import {submission_route} from "./submission-route.js"
import {option_route} from "./options-route.js"
import {upLoad_route} from './upload-routes.js'
import path from "path"
export const routes = express.Router();
routes.use(express.static(path.resolve(process.cwd(),'resource')))
routes.use(express.urlencoded({ extended: true }));
routes.use('/user',user_route)
routes.use('/book',book_route)
routes.use('/login',login_route)
routes.use('/home',home_route)
routes.use('/polls',polls_route)
routes.use('/submissions',submission_route)
routes.use('/options',option_route)
routes.use('/upLoad',upLoad_route)

export default routes;