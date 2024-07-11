const {
  BadRequestError
} = require('../core/error.response.js')
const TodoRepository = require("../repositories/todo.repo.js");

class TodoService {
  async createTodo(todoData) {
    try {
      // Perform input validation (example)
      if (!todoData.name || !todoData.description) {
        throw new Error('Name and description are required');
      }

      return await TodoRepository.create(todoData);
    } catch (error) {
      throw new Error(`TodoService Error: ${error.message}`);
    }
  }

  async getAllTodos() {
    try {
      return await TodoRepository.getAll();
    } catch (error) {
      throw new Error(`TodoService Error: ${error.message}`);
    }
  }

  async getTodoById(todoId) {
    try {
      return await TodoRepository.getById(todoId);
    } catch (error) {
      throw new Error(`TodoService Error: ${error.message}`);
    }
  }

  async updateTodo(todoId, todoData) {
    try {
      return await TodoRepository.update(todoId, todoData);
    } catch (error) {
      throw new Error(`TodoService Error: ${error.message}`);
    }
  }

  async deleteTodo(todoId) {
    try {
      return await TodoRepository.delete(todoId);
    } catch (error) {
      throw new Error(`TodoService Error: ${error.message}`);
    }
  }
}

module.exports = new TodoService();