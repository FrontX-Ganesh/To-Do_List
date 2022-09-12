import React from 'react';

const ToDoList = (props) => {
    return(
        <>  
            <div className='todo_style'>
                <i className='fa fa-times' aria-hidden="true" onClick={ () => { props.onSelect(props.id) } }></i>
                <li id={props.index} key={props.index}> {props.list} </li>
            </div>
        </>
    )
}

export default ToDoList;