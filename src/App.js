import React from 'react'
import {useState} from 'react';

function App() {
  const [check, setCheck] = useState([]);
  
  // concats checkbox values
  let checkbox = () => {
    let boxes = document.forms[0];
    let str = "";
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].checked) {
        str = str + boxes[i].value;
      }
    }
    setCheck(str);
  };

  return (
    <>
      <form className='search-form'>
            <div className='checkbox-container'>
            <div className='checkboxes'>
                <label className='check-option'><input type="checkbox" value="&health=dairy-free" onChange={checkbox} />dairy-free</label>
                <label className='check-option'><input type="checkbox" value="&health=gluten-free" onChange={checkbox}/>gluten-free</label>
                <label className='check-option'><input type="checkbox" value="&health=peanut-free" onChange={checkbox}/>peanut-free</label>
                <label className='check-option'><input type="checkbox" value="&health=tree-nut-free" onChange={checkbox}/>tree-nut-free</label>
                <label className='check-option'><input type="checkbox" value="&health=wheat-free" onChange={checkbox}/>wheat-free</label>
                <label className='check-option'><input type="checkbox" value="&health=soy-free" onChange={checkbox}/>soy-free</label>
            </div>
            <div className='checkboxes'>
            <label className='check-option'><input type="checkbox" value="&health=fish-free" onChange={checkbox}/>fish-free</label>
                <label className='check-option'><input type="checkbox" value="&health=shellfish-free" onChange={checkbox}/>shellfish-free</label>
                <label className='check-option'><input type="checkbox" value="&health=egg-free" onChange={checkbox}/>egg-free</label>
                <label className='check-option'><input type="checkbox" value="&health=vegan" onChange={checkbox}/>vegan</label>
                <label className='check-option'><input type="checkbox" value="&health=vegetarian" onChange={checkbox}/>vegetarian</label>
                <label className='check-option'><input type="checkbox" value="&health=paleo" onChange={checkbox}/>paleo</label>
            </div>
            </div>
      </form>
      <div>{check}</div>
    </>
    
  )
}

export default App;