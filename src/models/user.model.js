import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            minLength: 1,
            maxLength: 30

        },
        
        password: {
            type: String,
            rquired: true,
            minLength: 6,
            maxLength: 50
        },

        email : {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            
        },

        
    },
    {
        timestamps: true
    }
)

// before saving any password to database, encrypt it
userSchema.pre("save", async function() {
    if (!this.isModified("password")) {
        return; // just return, no next()
    }

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    } catch (error) {
        throw error; // throw instead of next(error)
    }
});

// Method to compare password during login
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

export const User = mongoose.model("User", userSchema)