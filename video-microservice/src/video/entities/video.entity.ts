import * as mongoose from 'mongoose';



export const VideoSchema = new mongoose.Schema(
    {
        userId: Number,
        url: String,
    },
    {
        timestamps: true,
        versionKey: false,
    }
);