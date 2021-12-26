import React, { useState,useEffect } from 'react';
import NavBar from './NavBar/Navbar';
import TodoForm from "./TodoForm";
import Todolist from "./TodoList";

// import '../App.css'

const TodoApp = () => {
    
    const [todos,setTodos] = useState([]);
    
    const [filteredTodos,setFilteredTodos] = useState([]);
    const [selectedOption,setSelectedOption] = useState("All");

    // console.log(selectedOption);
    useEffect(() => {
        filterTodos(selectedOption.value)
    }, [todos,selectedOption])  



    const addTodo = (input) =>{
        // setTodos(input)
        // console.log("add todoHandler called with " , input);
        const newTodo ={
            id:Math.floor(Math.random()*1000),
            text:input,
            isCompleted:false,
        }
        setTodos([...todos,newTodo])
    }

    const onComplete = (id) =>{
        const index = todos.findIndex((todo) => todo.id === id)
        const todo = {...todos[index]}

        todo.isCompleted =! todo.isCompleted;
        const totalTodo = [...todos]
        totalTodo[index] = todo;
        setTodos(totalTodo)
    }

    const onDelete = (id) => {
        const index = todos.filter((todo) => todo.id !== id)
        setTodos(index)
    }

    const updateTodo = (id,newValue) =>{
        const index = todos.findIndex((todo) =>todo.id === id);
        const selectedTodo = {...todos[index]}
        selectedTodo.text = newValue;
        const updateTodos = [...todos];
        updateTodos[index] = selectedTodo;
        setTodos(updateTodos);
    }

    const filterTodos = (status) => {
        switch (status) {
                case "Complete":
                setFilteredTodos(todos.filter((t) => t.isCompleted))
                break;
            case "UnCompleted":
                setFilteredTodos(todos.filter((t) => !t.isCompleted))
                break;
            default:
                setFilteredTodos(todos);
        }
    }

    const selectHandler = (e) =>{
        setSelectedOption(e)
        filterTodos(e.value);
    }

    return (
        <div className="container">
            <NavBar unCompleted={todos.filter((t) => !t.isCompleted).length} 
                selectedOption={selectedOption}
                onChange={selectHandler}
            />
            
            <TodoForm submitTodo={addTodo}/>
            <Todolist todos={filteredTodos}  onComplete={onComplete} onDelete={onDelete} onUpdateTodo={updateTodo}/>
        </div>
    );
}

export default TodoApp;