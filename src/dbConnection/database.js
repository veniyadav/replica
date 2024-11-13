import mongoose from "mongoose";


const dbConnection = async()=>{
    try {
        const db_instant = await mongoose.connect(`${process.env.MONGODB_URI}/replica`);
        console.log("Mongodb Connnect on DB Host !! ",db_instant.connection.host);
    } catch (error) {
        console.log(`connection Error >> ${error}`);
        process.exit(1)
        
    }
}

export default dbConnection;