"use strict";
// src/app.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskController_1 = require("./controllers/taskController");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get("/tasks", (req, res) => {
    const tasks = (0, taskController_1.getAllTasks)();
    res.json(tasks);
});
app.get("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const task = (0, taskController_1.getTaskById)(id);
    if (task) {
        res.json(task);
    }
    else {
        res.status(404).send("Task not found.");
    }
});
app.post("/tasks", (req, res) => {
    const task = req.body;
    (0, taskController_1.createTask)(task);
    res.status(201).send("Task created.");
});
app.put("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTask = req.body;
    (0, taskController_1.updateTask)(id, updatedTask);
    res.send("Task updated.");
});
app.delete("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    (0, taskController_1.deleteTask)(id);
    res.send("Task deleted.");
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
