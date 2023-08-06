const express = require("express")
const router = express.Router()
const { getTasks, getSingleTask, createTask, deleteTask, filterTask, replaceTask, filterPriority } = require("../controllers/task.controller")

router.get("/tasks", getTasks)
    .get("/tasks/:id", getSingleTask)
    .post("/tasks", createTask)
    .put("/tasks/:id", replaceTask)
    .delete('/tasks/:id', deleteTask)
    .get("/tasks", filterTask)
    .get('/tasks/priority/:level', filterPriority)

module.exports = router