import {Router} from 'express';
import limiter from '../reteLimiter/reteLimiter';
import { createTask } from '../controller/task.controller';


const router = Router();


router.route('/task').post(limiter,createTask)

export default router