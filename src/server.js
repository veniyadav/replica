import dotenv from 'dotenv';
import dbConnection from './dbConnection/database';
import {app} from './app.js'
dotenv.config(
    {
        path:'./.env'
    }
);

dbConnection()
.then(()=>{
    app.listen(process.env.PORT || 3000,() => console.log(`Worker ${process.pid} running on port ${PORT}`));
    const db_portIns = process.env.PORT || 3000;
    console.log(`listning on port !! ${db_portIns}`);     
})

.catch((err)=>{
    console.log(`listning faild !! ${err}`);
    
})
