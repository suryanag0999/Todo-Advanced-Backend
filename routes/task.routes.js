import express from "express";
import { newTask,getTasks,updateTask, updateLables, getLabels, updateStatus,deleteTask } from "../controllers/task.controller.js";
import { get } from "mongoose";

const router = express.Router();

router.post("/task", newTask);
router.get("/tasks", getTasks);
router.put("/task/:id", updateTask); 
router.put("/task/:id/labels", updateLables); 
router.get("/labels", getLabels); 
router.put("/task/:id/status", updateStatus); 
router.delete("/task/:id/",deleteTask); 

export default router;
