import React, {useState} from 'react'
import Table from './Table';

function useForm(initialValue) { 
   
  let [values, setValues] = useState(initialValue)
    
  //Hanlde the input value and set input state 
  let inputHandler = (e) => {
    console.log(values)
    return setValues((formInput)=> ({ 
        ...formInput,
        [e.target.name] : formInput[e.target.value]
      })
    ) 

  }

  return [values, inputHandler]  
}

export default useForm;
