import React from 'react';

import styles from './component.module.css'
import '../App.css'
const Todo = ({todo,onComplete,onDelete,onEdit}) => {
    
    return (
        <div className="todo">
            <div style={{cursor:"pointer"}} onClick={onComplete} className={todo.isCompleted ?"completed" : ""}>{todo.text}</div>
            <div>
                <button className={styles.button} onClick={onEdit}>Edit</button>
                <button className={styles.del} onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
}

export default Todo;