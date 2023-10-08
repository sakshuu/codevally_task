const mongoose = require("mongoose")

const taskSchema =  mongoose.Schema({
    task: {
      type: String,
      required:[true, "Please Peovide task"]
    },
    desc: {
      type: String,
      required:[true, "Please Peovide desc"]
    }
})

module.exports = mongoose.model("task", taskSchema)
