require("dotenv").config()
const express = require("express")
const app = express()
const routes = require("./routes/tasks.routes")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api", routes)

app.listen(process.env.PORT, () => console.log(`server is running at ${process.env.PORT}`))