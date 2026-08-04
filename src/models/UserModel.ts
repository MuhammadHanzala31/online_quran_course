import mongoose, { Schema, Document } from "mongoose";


interface UserInterface extends Document {
    username: string,
    email: string,
    password: string,
}


const userSchema = new Schema<UserInterface>({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
},
{
    timestamps: true
}
)


const User = mongoose.models.users || mongoose.model('User', userSchema)

export default User