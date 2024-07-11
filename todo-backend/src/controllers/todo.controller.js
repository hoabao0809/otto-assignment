const TodoService = require("../services/todo.service.js");
const {
  CREATED,
  OK,
  SuccessResponse
} = require("../core/success.response.js");
const { NotFoundError } = require("../core/error.response.js");

class TodoController {

  async createTodo(req, res, next) {
    try {
      const { name, description, priority, completed } = req.body;
      const todoData = { name, description, priority, completed };

      new CREATED({
        message: 'Create todo successfully',
        metadata: await TodoService.createTodo(todoData)
      }).send(res);

    } catch (error) {
      next(error);
    }
  }

  async getAllTodos(req, res, next) {
    try {
      new SuccessResponse({
        message: 'Get all todos successfully',
        metadata: await TodoService.getAllTodos()
      }).send(res);
    } catch (error) {
      next(error);
    }
  }

  async getTodoById(req, res, next) {
    const todoId = req.params.id;

    try {
      const todo = await TodoService.getTodoById(todoId);

      if (!todo) {
        throw new NotFoundError(`The todo with ID ${todoId} not found`);
      }

      new SuccessResponse({
        message: 'Get todo successfully',
        metadata: await TodoService.getTodoById(todoId)
      }).send(res);

    } catch (error) {
      next(error);
    }
  }

  async updateTodo(req, res, next) {
    try {
      const todoId = req.params.id;
      const { name, description, priority, completed } = req.body;
      const todoData = { name, description, priority, completed };

      new OK({
        message: 'Update todo successfully',
        metadata: await TodoService.updateTodo(todoId, todoData)
      }).send(res);

    } catch (error) {
      next(error);
    }
  }

  async deleteTodo(req, res, next) {
    try {
      const todoId = req.params.id;

      new OK({
        message: 'Delete todo successfully',
        metadata: await TodoService.deleteTodo(todoId)
      }).send(res);

    } catch (error) {
      next(error);
    }
  }
}

module.exports = new TodoController();