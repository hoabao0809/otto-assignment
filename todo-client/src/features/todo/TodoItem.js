import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Checkbox,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const priorityMap = {
  1: 'High',
  2: 'Medium',
  3: 'Low',
};

const TodoItem = ({ todo, onEdit, onDelete, onToggle }) => {
  const handleToggle = () => {
    onToggle(todo);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{todo.name}</Typography>
        <Typography color="textSecondary">{todo.description}</Typography>
        <Typography variant="body2">Priority: {priorityMap[todo.priority]}</Typography>
        <Checkbox
          checked={todo.completed}
          onChange={handleToggle}
          color="primary"
        />
        <IconButton onClick={() => onEdit(todo)}>
          <Edit />
        </IconButton>
        <IconButton onClick={() => onDelete(todo._id)}>
          <Delete />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
