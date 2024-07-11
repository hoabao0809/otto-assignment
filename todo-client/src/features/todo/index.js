import React, { useState } from 'react';
import {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from '../../api/taskApi';
import { Button } from '@mui/material';
import TodoList from './TodoList'; // Assuming TodoList is in the same directory as TodoContainer
import TodoDialog from './TodoDialog'; // Assuming TodoDialog is in the same directory as TodoContainer

const TodoContainer = () => {
  const { data: todos, isLoading } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const [open, setOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const handleAddTodo = () => {
    setCurrentTodo(null); // Reset currentTodo state for adding new todo
    setOpen(true);
  };

  const handleEditTodo = (todo) => {
    setCurrentTodo(todo); // Set currentTodo for editing
    setOpen(true);
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
  };

  const handleToggle = (updatedTodo) => {
    updateTodo({
      id: updatedTodo._id,
      ...updatedTodo,
      completed: !updatedTodo.completed,
    });
  };

  const handleSubmitTodo = async (formData) => {
    if (currentTodo) {
      await updateTodo({ id: currentTodo._id, ...formData });
    } else {
      await addTodo(formData);
    }
    setOpen(false);
  };

  return (
    <>
      <h1>Todo List</h1>
      <Button variant="contained" color="primary" onClick={handleAddTodo}>
        Add Todo
      </Button>
      <TodoList
        todos={todos}
        isLoading={isLoading}
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleToggle={handleToggle}
      />
      <TodoDialog
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmitTodo}
        todo={currentTodo}
      />
    </>
  );
};

export default TodoContainer;
