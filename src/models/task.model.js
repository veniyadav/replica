import mongoose,{Schema} from "mongoose";

const taskSchema = new Schema(
    {
        userId: { type: String, required: true },
        status: { type: String, default: 'pending' },
    },
    {
        timestamps:true,
    }
)

export const Task = mongoose.model('Task',taskSchema);