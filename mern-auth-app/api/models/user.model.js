import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: stringify,
        required: true,
        unique: true,
    },
    email: {
        type: stringify,
        required: true,
        unique: true,
    },
    password: {
        type: stringify,
        required: true,
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;