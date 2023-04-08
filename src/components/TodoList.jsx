import { Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { gettodos, completetodos, deletetodos, editTodos } from '../store/todosSlice';
import { useEffect } from 'react';
import { CircularProgress } from '@mui/material';

const CardList = () => {

  const dispatch = useDispatch();
  const { todos: todosList, status } = useSelector((state) => (state.todos))

  useEffect(() => {
    dispatch(gettodos())
  }, [])

  if (status === 'loading') {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '70vh', width: '100vw' }}>
        <CircularProgress />
        <p>Loading todos</p>
      </Box>)
  }

  if (status === 'error') {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '70vh', }}>
        <button className='btn'>Something went wrong, click to Refresh</button>
      </Box>)
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center", alignItems: "center" }}>
      {todosList.map((todo) => (
        <Card sx={{ width: 250, margin: '20px' }} key={todo.id}>
          <CardContent sx={{ maxHeight: '100px', overflow: 'hidden' }}>
            <Typography variant="h5" component="h2" noWrap>
              {todo.completed ? (<strike>{todo.title}</strike>) : (todo.title)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => dispatch(completetodos(todo.id))}>
              {todo.completed ? 'RE-DO' : 'DO'}
            </Button>
            <Button size="small" onClick={() => dispatch(editTodos(todo.id))}>
              Edit
            </Button>
            <Button size="small" onClick={() => dispatch(deletetodos(todo.id))}>
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};


export default CardList;