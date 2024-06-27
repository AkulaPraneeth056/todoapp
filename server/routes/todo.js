const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo')


router.get('/', todoController.getAllTodos )

router.post('/', todoController.createTodo )

router.patch('/:id', todoController.updateTodo)

router.delete('/:id', todoController.deleteTodo)

// router.editTodo('/:id', todoController.editTodo)

module.exports = router;
