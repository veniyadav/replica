import express from 'express';
import cluster, { Worker } from 'cluster';
import os from 'os';
import taskRouter from './routes/taskRoutes.js'
const numCPUs = os.cpus().length;
const app = express();
app.use(
    express.json(
       {limit:"16kb" }
    )
);
if(cluster.isPrimary){
    console.log(`Master ${process.pid} is running`);
    for(let i=0; i< numCPUs; i++) cluster.fork();

    cluster.on('exit', (worker)=>{
        console.log(`Worker ${worker.process.pid} died, restarting...`);
        cluster.fork();
    });;
    
} else {
    app.use('/api', taskRouter);
}

export {app}