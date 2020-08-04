import React from 'react';
import ToDoList from './toDo/toDoList'
function App() {
  const todos=[
    {id:1, completed:false, title:'купити хуйню'},
    {id:2, completed:false, title:'купити херню'},
    {id:3, completed:false, title:'купити залупу'}
  ]
  return (
   <div className='wrapper'> 
   <h1>react tutorial</h1>
   <ToDoList todos={todos} />
  </div>
  )
};


export default App;
