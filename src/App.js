import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App = () =>{
  const [newItem,setNewItem] = useState("");
  const [items,setItems] =useState([]);

  const newItems =(events)=>{
    setNewItem(events.target.value);
  }

  const addItems = ()=>{
      setItems([...items,newItem]);
      setNewItem("");
  }

  const deleteItem = (ind)=>{
    setItems((items)=>{
      return (
        items.filter((arrElem,index)=>{
          return index!==ind;
        })
      )
    })
  };


  return (
    <div className="main_div">
  <div className="center_div">
  <h1>ToDo List</h1>
  <input 
  type="text"
  placeholder="Add an item"
  onChange={newItems}
  value={newItem}
  />
  <button className="btn" onClick={addItems}> + </button>

  <ul>
      {<ToDoList 
        lists={items}
        onSelect={deleteItem}
      />}
  </ul>
  </div>
  </div>
  )
};

export default App;