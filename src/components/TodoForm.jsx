import React, { useState } from 'react';

const TodoForm = (props) => {
    
    const [input,setInput] = useState("")
    
    const changeHandler = (e) => {
        setInput(e.target.value)
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        if (!input) {
            alert("input is empty")
            return;
        }
        
        props.addTodoHandler(input);
        setInput("");
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" value={input} onChange={changeHandler}/>
            <button type='submit'>Add</button>
        </form>
    );
}

export default TodoForm;