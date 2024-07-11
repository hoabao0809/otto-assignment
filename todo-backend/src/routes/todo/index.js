const express = require('express');
const router = express.Router();

const todoController = require('../../controllers/todo.controller.js');
const asyncHandler = require('../../helpers/asyncHandler.js');
const { validateCreateTodo, validateUpdateTodo } = require('../../validations/todo.validation.js');

// GET /todos - Get all todos
router.get('', asyncHandler(todoController.getAllTodos));

// GET /todos/:id - Get todo by ID
router.get('/:id', asyncHandler(todoController.getTodoById));

// POST /todos - Create a new todo
router.post('/', validateCreateTodo, asyncHandler(todoController.createTodo));

// PUT /todos/:id - Update todo by ID
router.put('/:id', validateUpdateTodo, asyncHandler(todoController.updateTodo));

// DELETE /todos/:id - Delete todo by ID
router.delete('/:id', todoController.deleteTodo);

module.exports = router;