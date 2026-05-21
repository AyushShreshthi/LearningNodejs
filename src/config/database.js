import mongoose from "mongoose";


const connectDB = async () => {
    try{
        console.log("URI:", process.env.MONGODB_URI);
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}`, {
                family : 4,
                serverSelectionTimeoutMS: 10000,
            }
        )
        console.log(`\n MongoDB connected !!!
            ${connectionInstance.connection.host}`)

    }
    catch(error){
        console.log("MongoDB connection failed", error);
        process.exit(1);
    }
}

export default connectDB;