"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTaskById = exports.getAllTasks = void 0;
let tasks = [
    {
        id: 1,
        title: "Learn TypeScript",
        description: "Here i am desperate to use and learn all the given knowledge in the world",
        completed: false
    },
    {
        id: 2,
        title: "Building CRUD application",
        description: "Create read update and Delete task.",
        completed: false
    },
];
const getAllTasks = () => tasks;
exports.getAllTasks = getAllTasks;
const getTaskById = (id) => tasks.find((tasks) => tasks.id === id);
exports.getTaskById = getTaskById;
const createTask = (task) => {
    tasks.push(task);
};
exports.createTask = createTask;
const updateTask = (id, updatedTask) => {
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
        tasks[index] = updatedTask;
    }
};
exports.updateTask = updateTask;
const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== id);
};
exports.deleteTask = deleteTask;
