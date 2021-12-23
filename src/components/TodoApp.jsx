import React, { useState } from 'react';
import TodoForm from "./TodoForm";
import Todolist from "./TodoList";



const TodoApp = () => {
    
    const [todos,setTodos] = useState([]);
    
    const addTodoHandler = (input) =>{
        // setTodos(input)
        console.log("add todoHandler called with " , input);
        const newTodo ={
            id:Math.floor(Math.random()*1000),
            text:input,
            isCompleted:false,
        }
        setTodos([...todos,newTodo])
    }

    return (
        <div className="container">
            <TodoForm addTodoHandler={addTodoHandler}/>
            <Todolist todos={todos}/>
        </div>
    );
}

export default TodoApp;