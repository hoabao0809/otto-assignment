import React from 'react';
import {
  CardContent,
  Typography,
  IconButton,
  Checkbox,
  Stack,
  Chip
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import StyledCard from '../../components/StyledCard';

const getPriorityLabel = (priority)=>{
  switch (priority) {
    case 1: return 'High';
    case 2: return 'Medium';
    default: return 'Low';
  }
}

const getPriorityColor = (priority)=>{
  switch (priority) {
    case 1: return 'error';
    case 2: return 'primary';
    default: return 'info';
  }
}

const TodoItem = ({ todo, onEdit, onDelete, onToggle }) => {
  const {name, description, priority, completed} = todo ?? {}
  const handleToggle = () => {
    onToggle(todo);
  };

  return (
    <StyledCard>
      <CardContent>
      <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center'>
        <Typography fontWeight='600' variant="h5">{name}</Typography>
        <Stack direction='row' spacing={1} alignItems='center'>
          <IconButton onClick={() => onEdit(todo)} size='small'>
            <Edit />
          </IconButton>
          <IconButton onClick={() => onDelete(todo._id)} size='small'>
            <Delete />
          </IconButton>
        </Stack>
        </Stack>
        <Typography color="textSecondary">{description}</Typography>
        <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center'>
          <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center'>
            <Checkbox
              checked={completed}
              onChange={handleToggle}
              color="primary"
              style={{paddingLeft: 0}}
            />
            <Typography color="textSecondary">Completed</Typography>
          </Stack>
          <Chip label={getPriorityLabel(priority)}  color={getPriorityColor(priority)}  size='small' />
        </Stack>
      </CardContent>
    </StyledCard>
  );
};

export default TodoItem;
