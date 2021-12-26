import React, {  useRef, useState,useEffect } from "react";

import styles from './component.module.css'

const TodoForm = (props) => {
  
  const [input, setInput] = useState(props.edit ? props.edit.text : "");
  
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus();
  }, [])


  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("input is empty");
      return;
    }

    props.submitTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={input}
        onChange={changeHandler}
        placeholder={props.edit ? "Update Todo..." : "Add new todo..."}
        ref={inputRef}
        className={styles.input}
      />
      <button className={styles.ad} type="submit">{props.edit ? "Update" : "Add"}</button>
    
      
    </form>
  );
};

export default TodoForm;
