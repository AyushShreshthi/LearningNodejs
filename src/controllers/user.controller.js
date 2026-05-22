import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
    try {
        const {username, email, password} = req.body;

        if(!username || !email || !password){
            return res.status(400).json({message: "All fields are important"})
        }

        const existing = await User.findOne({email: email.toLowerCase() });

        if(existing){
            return res.status(400).json({message: "user already exists!!"});
        }


        const user = await  User.Create({
            username,
            email : email.toLowerCase(),
            password,
            loggedIn: false
        });

        res.status(201).json({message: "User registered successfully", user:{
            id : user._id,
            username : user.username,
            email : user.email,
        }})
    }
    catch(error){
        res.status(500).json({message: "Internal Server Error", error: error.message})  
    }
} 


export{ registerUser}