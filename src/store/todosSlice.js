import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        status: 'idle',
        editTodo:null
    },
    reducers: {
        settodos(state, action) {
            state.todos=action.payload
        },
        setStatus(state,action){
            state.status=action.payload
        },
        createtodos(state, action) {
            return {...state,todos:[...state.todos, {id:Date.now(), title:action.payload,completed:false, userId: 1}]}
        },
        editTodos(state,action){
            const findTodo=state.todos.find(todo=>todo.id===action.payload)
            return {...state, editTodo:findTodo}
        },
        updatetodos(state, action) {
            const updateTodo=[...state.todos].map(todo=>todo.id===state.editTodo.id?{...state.editTodo,title:action.payload}:todo)
            return {...state, todos:updateTodo}
        },
        deletetodos(state, action) {
            return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
        },
        completetodos(state,action){
            return { ...state, todos: state.todos.map((todo) =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
              )
        }}
    },
    extraReducers: (builder) => {
        builder
            .addCase(gettodos.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(gettodos.fulfilled,(state,action)=>{
                state.todos=action.payload,
                state.status='idle'
            })
            .addCase(gettodos.rejected,(state,action)=>{
                state.status='error'
            })
    }
})

export const { settodos, setStatus, createtodos, editTodos, updatetodos,completetodos, deletetodos } = todoSlice.actions;
export default todoSlice.reducer;

export const gettodos = createAsyncThunk('getData', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1/todos')
    return response.data.slice(0,5)
})



