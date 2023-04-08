import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { Provider } from 'react-redux'
import store from './store/store'
function App() {
  return (
    <div className='app'>
      <Provider store={store}>
        <Header />
        <TodoInput />
        <TodoList />
      </Provider>
    </div>
  )
}
export default App
