import { setDefaultResultOrder, setServers } from 'dns';
setDefaultResultOrder('ipv4first');
setServers(['8.8.8.8', '8.8.4.4']); //  Force Node.js to use Google DNS


import dotenv from "dotenv"
dotenv.config({
    path: './.env'
});
import connectDB from "./config/database.js";
import app from "./app.js"



const startServer = async () =>{
    try{
        await connectDB();

        app.on("error", (error) => {
            console.log("ERROR " , error);

            throw error;
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port: 
                ${process.env.PORT}`);
            
        })
    }
    catch(error){
        console.log("MongoDB connection failed ", error);
        
    }
}

startServer();