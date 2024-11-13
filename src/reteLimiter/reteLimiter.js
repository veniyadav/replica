import rateLimiter from "express-rate-limit";

const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 20,             // Limit each IP to 20 requests per minute
    message: 'Too many requests, please try again later.'
  });

  export default limiter;