const task = require("../models/TaskModels");

exports.addAllTask = async (req, res) => {
    try {
        console.log(req.body);
         await task.create(req.body)
        res.json({
            success: true,
            message: "Task task Created Successfully"
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`
        })
    }
}

exports.getAllTask = async (req, res) => {
    try {
        const result = await task.find()
        res.json({
            success: true,
            message: "All Task Fetched",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`
        })
    }
}


 exports.deleteTask = async (req, res) => {
     try {
         const {taskId} = req.params
         await task.findByIdAndDelete(taskId)
         res.json({
             success: true,
             message: "Task delete",
         })
     } catch (error) {
         res.json({
             success: false,
             message: `Error ${error}`
         })
     }
 }

  exports.editTask = async (req, res) => {
      try {
         const {taskId} = req.params
           await task.findByIdAndUpdate(taskId, req.body)
          res.json({
              success: true,
              message: "Task edit",
             //  result
          })
      } catch (error) {
          res.json({
              success: false,
              message: `Error ${error}`
          })
     }
 }