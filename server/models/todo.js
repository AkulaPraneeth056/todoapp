const mongoose = require("mongoose");


const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        edit:String,
    },
    description: {
        type: String
    },
    done: {
        type: Boolean
    }
})

module.exports = mongoose.model("todo", todoSchema)

