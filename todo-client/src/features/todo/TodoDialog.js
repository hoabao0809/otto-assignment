import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';

const TodoDialog = ({ open, onClose, onSubmit, todo }) => {
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    priority: 2, // Default to 'medium'
    completed: false,
  });

  useEffect(() => {
    if (todo) {
      setFormState({
        name: todo.name,
        description: todo.description,
        priority: todo.priority,
        completed: todo.completed,
      });
    }
  }, [todo]);

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handlePriorityChange = (e) => {
    setFormState({ ...formState, priority: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formState);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{todo ? 'Edit Todo' : 'Add Todo'}</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          name="description"
          value={formState.description}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="priority-label">Priority</InputLabel>
          <Select
            labelId="priority-label"
            name="priority"
            value={formState.priority}
            onChange={handlePriorityChange}
          >
            <MenuItem value={1}>High</MenuItem>
            <MenuItem value={2}>Medium</MenuItem>
            <MenuItem value={3}>Low</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" variant='contained'>
          {todo ? 'Update' : 'Add'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TodoDialog;
