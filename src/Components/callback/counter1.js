import React,{useEffect,useState} from 'react'
 
function Counter1(props) {
  
  return (
    <div className="App">
        <h1> Child CallBack {props.val} </h1>        
    </div>
  );

}

export default React.memo(Counter1);
