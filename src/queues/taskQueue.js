import Queue from "bull";
const taskQueue = new Queue('task-queue', process.env.REDIS_URL);
taskQueue.process(async (job) => {
    const { userId } = job.data;
    console.log(`Processing task for user: ${userId} at ${new Date().toISOString()}`);
    // Here i am add more logic for processing the task
  });

  export {taskQueue}