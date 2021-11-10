import React, {useContext, useState} from 'react'

function useLocalStorag(props) {  

  switch(props.type) {
    case 'get':     
      return JSON.parse(localStorage.getItem(props.itemKey))    
    case 'set':
      let item = JSON.stringify(props.itemVal)
      localStorage.setItem(props.itemKey, item);
      break;
    case 'remove':
      alert('asdf')
      localStorage.removeItem(props.itemKey);
      break;
  }
  return true;

}

export default useLocalStorag;
