import { Task } from "../modals/task";
let tasks: Task[] = [
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
export const getAllTasks = (): Task[] => tasks;

export const getTaskById = (id: number): Task | undefined => tasks.find((tasks) => tasks.id === id);

export const createTask = (task: Task): void => {
    tasks.push(task);
};

export const updateTask = (id: number, updatedTask: Task): void => {
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
        tasks[index] = updatedTask;
    }
};

export const deleteTask = (id: number): void => {
    tasks = tasks.filter((task) => task.id !== id);
};