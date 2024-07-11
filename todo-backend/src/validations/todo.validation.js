const { body, validationResult } = require('express-validator');
const { InvalidInputException } = require('../core/error.response');
const { PRIORITY_VALUES } = require('../constants/todo.constant');

// Validation middleware for creating a new todo
const validateCreateTodo = [
    body('name').notEmpty().withMessage('Name is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('priority').notEmpty().withMessage('Priority is required'),
    body('priority').isIn(PRIORITY_VALUES).withMessage('Invalid priority'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new InvalidInputException("Invalid input.", errors.array())
        }
        next();
    }
];

// Validation middleware for updating an existing todo
const validateUpdateTodo = [
    body('name').optional().notEmpty().withMessage('Name is required'),
    body('description').optional().notEmpty().withMessage('Description is required'),
    body('priority').optional().notEmpty().withMessage('Priority is required'),
    body('priority').optional().isIn(PRIORITY_VALUES).withMessage('Invalid priority'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateCreateTodo,
    validateUpdateTodo
}