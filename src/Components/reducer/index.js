import React, { useState,useEffect, useReducer } from 'react'
import Button  from 'react-bootstrap/Button'

const reducer = (state, action) => {
  console.log(state,'conosle.',action)
  switch(action.type) {
    case 'increment' : return state + 1
      
    case 'decrement'  : return state -1  
  default:   return  state;
  }
}

const initialState = 6

function List(props) {
  const [state, dispatch]  = useReducer(reducer, initialState)
  return (
    <div className="App">
        <h1> Counter </h1>
        <h1> {state} </h1>
         <Button variant="primary" className="mb-5 mr-5" onClick={()=> dispatch({type:'increment'})}>Increment </Button>
          
         <Button variant="primary" className=" mt-5 mr-5" onClick={()=> dispatch({type:'decrement'})}>  Decrement</Button>
    </div>
  );
}

export default List;
