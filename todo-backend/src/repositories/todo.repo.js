const { Todo } = require('../models/todo.model.js');

const {
  Types
} = require('mongoose');

class TodoRepository {
  async create(todoData) {
    try {
      const todo = new Todo(todoData);
      return await todo.save();
    } catch (error) {
      throw new Error(`Error creating todo: ${error.message}`);
    }
  }

  async getAll() {
    try {
      return await Todo.find();
    } catch (error) {
      throw new Error(`Error fetching todos: ${error.message}`);
    }
  }

  async getById(todoId) {
    try {
      return await Todo.findById(todoId);
    } catch (error) {
      throw new Error(`Error fetching todo: ${error.message}`);
    }
  }

  async update(todoId, todoData) {
    try {
      return await Todo.findByIdAndUpdate(todoId, todoData, { new: true });
    } catch (error) {
      throw new Error(`Error updating todo: ${error.message}`);
    }
  }

  async delete(todoId) {
    try {
      return await Todo.findByIdAndDelete(todoId);
    } catch (error) {
      throw new Error(`Error deleting todo: ${error.message}`);
    }
  }
}

module.exports = new TodoRepository();