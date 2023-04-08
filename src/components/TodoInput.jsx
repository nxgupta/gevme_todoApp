import { useEffect, useState } from "react"
import { TextField, Button, Box } from '@mui/material';
import { createtodos, updatetodos } from "../store/todosSlice";
import { useDispatch, useSelector } from 'react-redux';
//import Button from '@mui/material/Button';

const TodoInput = () => {

  const { editTodo } = useSelector(state => state.todos)
  const [todo, setTodo] = useState("")
  const dispatch = useDispatch();
  const handleTodo = (e) => {
    setTodo(e.target.value)
  }
  useEffect(() => {
    if (editTodo) {
      setTodo(editTodo.title)
    }
    else {
      setTodo("")
    }
  }, [setTodo, editTodo])

  const handleSubmit = () => {
    if(!editTodo) {
      dispatch(createtodos(todo))
    }
    else{
      dispatch(updatetodos(todo))
    }
    setTodo("")
  }
  return (
    <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', gap: '10px', margin: '10px' }}>
      <TextField
        className="input"
        placeholder="Enter a new Todo"
        value={todo}
        name='todo'
        onChange={handleTodo}
      />
      <Button className="btn btn-add" onClick={() =>handleSubmit()} variant="contained">
        Add
      </Button>
    </Box>
  )
}

export default TodoInput