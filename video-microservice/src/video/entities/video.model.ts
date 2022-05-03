import { Document } from 'mongoose';

export interface Video  extends Document {
    userId: Number,
    url: String,
}