import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';

function App() {
  const todo = useSelector(selectTodoList);

  return (
    <div className="App">
      <div className="app__container">
        <div className="app_todoContainer">
           {
              todo.map(item => (
                <TodoItem 
                  name={item.item}
                  done={item.done}
                  id={item.id}
                />
              ))
           } 
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
