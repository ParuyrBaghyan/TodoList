
import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFooter from './TodoFooter';

function App() {

  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: 'Learn JS',
      isComplated: false   
    },
    {
      id: Math.random(),
      text: 'Learn CSS',
      isComplated: false
    },
    {
      id: Math.random(),
      text: 'Learn React',
      isComplated: false
    }
  ])

  return (
    <div className="App">
      <TodoForm onAdd ={(text) => {
        setTodos([
          ...todos,
          {
            id:Math.random(),
            text:text,
            isComplated:false
          }
        ])
      }}/>
      <TodoList 
      todos ={todos}
      onDelete={(todo) => {
        setTodos(todos.filter((t) => t.id !== todo.id))
      }}
      onChange={(newTodo) => {
        todos.map(todo => {
          if(todo.id === newTodo.id){
            return newTodo
          }
          return todo
        })
      }}
      />
      <TodoFooter todos={todos} onClearCompleted={() => {
        setTodos(todos.filter(todo => !todo.isComplated))
      }}/>
    </div>
  );
}

export default App;
