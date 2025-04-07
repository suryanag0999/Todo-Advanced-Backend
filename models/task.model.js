import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  due_date: Date,
  status: {
    type: String,
    default: "Open",
  },
  labels: [{ type: String }],
  added_on: {
    type: Date,
    default: Date.now,
  },
});

const Task = mongoose.model("Task", taskSchema);
export default Task;
