const fs = require("fs")
const path = require("path")

const dbPath = path.join(__dirname, "data", "db.json")
const db = JSON.parse(fs.readFileSync(dbPath, { encoding: 'utf-8', flag: 'r' }))
let data = db.tasks

// Endpoint: GET /tasks
const getTasks = (req, res) => res.status(200).json(data)

//  Endpoint: GET /tasks/:id. get a single task by id
const getSingleTask = (req, res) => {
    const id = +req.params.id
    const item = data.find(item => item.id == id)
    if (!item) return res.status(404).send("item not found!")
    else return res.status(200).send(item)
}

// Endpoint: POST /tasks create a new task or add a new task in the existing db
const createTask = (req, res) => {
    const body = req.body
    console.log(body)
    if (!body.id || !body.title || !body.description || typeof body.completed != 'boolean' || !body.priority) {
        return res.status(400).send("invalid request")
    }
    const addNewTask = {
        id: data.length + 1,
        title: body.title,
        description: body.description,
        completed: body.completed,
        priority: body.priority || 'medium'
    }
    data.push(addNewTask)
    return res.status(201).json(addNewTask)
}

// Endpoint: PUT /tasks/:id  replace existing task by with a new OBJ by ID
const replaceTask = (req, res) => {
    const body = req.body
    const id = +req.params.id
    if (!body.id || !body.title || !body.description || typeof body.completed != 'boolean' || !body.priority) {
        return res.status(400).send("invalid request")
    }
    const index = data.findIndex((item) => item.id == id)
    if (index == -1) {
        return res.status(404).send("task not found")
    }
    data[index] = {
        id: id,
        title: body.title,
        description: body.description,
        completed: body.completed,
        priority: body.priority || 'medium'
    };

    res.json(data[index]);
}

//  Endpoint: DELETE /tasks/id delete a task by ID
const deleteTask = (req, res) => {
    const id = +req.params.id
    const index = data.findIndex((item) => item.id == id);
    if (index == -1) {
        return res.status(404).send('Task not found');
    } else {
        data.splice(index, 1);
        return res.status(204).send('resource not available')
    }
}

// Optinal Extention
// filter task by query paramater
// Filter tasks by completion status
const filterTask = (req, res) => {
    if (req.query.completed) {
        const completedStatus = req.query.completed == 'true';
        data = data.filter(item => item.completed == completedStatus);
    }
    res.send(data);
}

// filter and retrieve  tasks based on priority level
const filterPriority = (req, res) => {
    const level = req.params.level.toLowerCase();
    const filteredTasks = data.filter(item => item.priority && item.priority.toLowerCase() == level);
    res.json(filteredTasks);
}

module.exports = {
    getTasks,
    getSingleTask,
    createTask,
    replaceTask,
    deleteTask,
    filterTask,
    filterPriority
}