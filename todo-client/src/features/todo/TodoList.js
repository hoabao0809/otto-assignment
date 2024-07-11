import React from 'react';
import { Grid } from '@mui/material';
import TodoItem from './TodoItem'; // Assuming TodoItem is in the same directory as TodoList

const TodoList = ({ todos, isLoading, handleEditTodo, handleDeleteTodo, handleToggle }) => {
  return (
    <Grid container spacing={2} style={{ marginTop: 20 }}>
      {isLoading && <p>Loading...</p>}
      {todos?.map((todo) => (
        <Grid item xs={12} sm={6} md={4} key={todo._id}>
          <TodoItem
            todo={todo}
            onEdit={handleEditTodo}
            onDelete={handleDeleteTodo}
            onToggle={handleToggle}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TodoList;
