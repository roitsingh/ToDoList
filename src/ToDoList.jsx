import React from 'react';

const ToDoList = (props)=>{
    return (
        <>
        {
            props.lists.map((val,ind)=>{
                return (
                    <>
                    <div className="created_lists">
                    <i className="far fa-trash-alt" id="cross" onClick={()=>{props.onSelect(ind)}}></i>
                    <li>{val}</li>
                    </div>
                    </>
                    )
                     })
        }
        </>
    )
};

export default ToDoList;