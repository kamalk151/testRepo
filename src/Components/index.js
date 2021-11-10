import React, {useContext, useState} from 'react'

function Index(props) {
  
  return (
    <div className="App">
      <h1>  Welcome to Home Page  </h1>
      <input type="button" className="" value="Gun Fire" onClick={ props.hocHandler } placeholder="Search" />      
    </div>
  );
}

export default Index;
