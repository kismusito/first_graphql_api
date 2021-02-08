import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: new Date(),
    },
});

module.exports = model("User", userSchema);
