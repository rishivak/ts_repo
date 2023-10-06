// src/app.ts

import express from "express";
import { Task } from "./modals/task";
import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "./controllers/taskController";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/tasks", (req, res) => {
  const tasks: Task[] = getAllTasks();
  res.json(tasks);
});

app.get("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task: Task | undefined = getTaskById(id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).send("Task not found.");
  }
});

app.post("/tasks", (req, res) => {
  const task: Task = req.body;
  createTask(task);
  res.status(201).send("Task created.");
});

app.put("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedTask: Task = req.body;
  updateTask(id, updatedTask);
  res.send("Task updated.");
});

app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  deleteTask(id);
  res.send("Task deleted.");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
