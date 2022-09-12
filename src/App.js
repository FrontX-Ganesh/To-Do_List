import React, { useState } from "react";
import './App.css';
import ToDoList from './ToDoList';

const App = () => {
  const [getInput, getInputValue] = useState();
  const [showValue, showItemsValue] = useState([]);
  const [colorVal,getColor] = useState('#6CB4EE');

  const inputValue = (event) => {
    getInputValue(event.target.value);
  }
  
  const showItems = () => {
    if(getInput !== '' && getInput !== undefined){
      showItemsValue( (preVal) => [...preVal, getInput] );
      getInputValue('');
      getColor('#50C878');
    }
  }

  const deleteItem = (id) => {
    showItemsValue( (preVal) => {
      return preVal.filter( (arr, curr) =>{
        return curr !== id
      })
    })
    getColor('#fd5c63');
  }

  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1 style={{ backgroundColor : colorVal }}>To Do List</h1>
          <br />
          <input type="text" placeholder="Add a item" value={getInput} onChange={inputValue}/>
          <button onClick={showItems}> + </button>
          <ol>
          { showValue.map(
              (arr, curr) => {
                return <ToDoList 
                          id = {curr}
                          key = {curr}
                          list = {arr}
                          onSelect = {deleteItem}
                        />
              }
            )
            }
            
          </ol>
        </div>
      </div>
    </>
  )
}

export default App;
    