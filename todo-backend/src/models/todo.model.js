const {
  model,
  Schema
} = require('mongoose');
const { PRIORITY_VALUES } = require('../constants/todo.constant');

const DOCUMENT_NAME = 'Todo';
const COLLECTION_NAME = 'todos';

const todoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
      type: String,
      required: true
  },
  priority: {
    type: Number,
    enum: PRIORITY_VALUES,
    default: 'medium'
  },
  completed: {
    type: Boolean,
    default: false
  }
}, {
  collection: COLLECTION_NAME,
  timestamps: true,
});

module.exports = {
  Todo: model(DOCUMENT_NAME, todoSchema),
};