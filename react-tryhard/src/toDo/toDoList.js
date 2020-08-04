import React from 'react'
import TodoItem from './Todoitem'
const styles={
    ul:{
        listStyle:'none',
        margin:0,
        padding:0
    }
}
export default function ToDoList(props){
    return(
        <ul style={styles.ul}>
        {props.todos.map(todo =>{
            return <TodoItem key={todo.id} todo={todo}/>
        } )}
        </ul>
    )
}