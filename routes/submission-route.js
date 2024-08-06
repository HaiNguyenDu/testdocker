import express from "express";
import { createS,updateS,getAllSubmissionByOption } from "../controllers/submission-controller.js";
import { checklocked } from "../middleware/checklocked.js";
import { authenticate } from "../middleware/authenticate.js";
export const submission_route = express.Router()

submission_route.get('/getallsubmission/:id',authenticate,getAllSubmissionByOption)
submission_route.post('/createsubmission',authenticate,checklocked,createS)
submission_route.put('/updatesubmission',authenticate,updateS)


export default submission_route