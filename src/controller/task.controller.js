import Task from '../models/task.model.js'
import { taskQueue } from '../queues/taskQueue.js'
import fs from 'fs';
import path from 'path';
import { asyncHandler } from '../utils/asyncHandling.js';
import { ApiResponse } from '../utils/apiResponseHandle.js';
import { ApiError } from '../utils/apiErrorHandling.js';

const createTask = asyncHandler(async (req,res) =>{
    try {
        const {userId} = req.body;
        const task = await Task.create({userId});
        await taskQueue.add({userId});
        fs.appendFileSync(
            path.join(__dirname,`../logs/taskLog.txt`),
            `Task created for user ${userId} ar ${new Date().toLocaleString()}\n`
        );
        res
        .status(201)
        .json(
            new ApiResponse(
                200,{},
                'Task created and queued'
            )
        )
    } catch (error) {
        console.log(error);
        throw new ApiError(500,'Error creating task')
        
        
    }
});

export {
    createTask
}

