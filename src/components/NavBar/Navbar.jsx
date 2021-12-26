import React, { useState } from 'react';
import Select from 'react-select';

import styles from '../component.module.css'

const options = [
    {value :'All',label:'All'},
    {value:'Complete',label:'Complete'},
    {value:'UnCompleted',label:"UnCompleted"}
]

const NavBar = ({unCompleted,onChange,selectedOption}) => {
    

    if (!unCompleted) return <h2 className={styles.text}>set your work</h2>
    
    return (
        <header className={styles.header}>
            <h2><span className={styles.span}>{unCompleted}</span>works are not completed... </h2>
            <Select 
                onChange={onChange}
                value={selectedOption}
                options={options}
                className={styles.select}
            />
            
        </header>
    );
}

export default NavBar;