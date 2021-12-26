import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const Todolist = ({todos,onComplete,onDelete,onUpdateTodo}) => {
    
    const [edit,setEdit] = useState({id:null,text:"",isCompleted:false})
    // console.log(edit);
    const renderTodos = () =>{
        // if (todos.length === 0 ) return <p>add some todos</p>
        return todos.map((todo) =>{
            return (
                <Todo  
                    key={todo.id} 
                    todo={todo} 
                    onComplete={() =>onComplete(todo.id)}
                    onDelete={() => onDelete(todo.id)}
                    onEdit={() => setEdit(todo)}
                />
            )
        })
    }

    const editTodo = (newValue) => {
        onUpdateTodo(edit.id,newValue)
        // console.log(newValue);
        setEdit({id:null,text:""})
    }


    
    return(
        <div>
            {edit.id ? <TodoForm submitTodo={editTodo} edit={edit}/> : renderTodos()}
        </div>
    )
    
}

export default Todolist;