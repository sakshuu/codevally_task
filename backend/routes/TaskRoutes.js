const { getAllTask, addAllTask, deleteTask, editTask } = require("../controllers/TaskController")

const router = require("express").Router()

router
.post("/add", addAllTask)
.get("/", getAllTask)
.delete("/:taskId", deleteTask)
.put("/:taskId", editTask)

module.exports = router