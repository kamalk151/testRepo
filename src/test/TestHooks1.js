import React, {useState} from 'react'
import Table from './Table';

function TestForm1() { 
  
  let [values, setValues] = useState({ name:'', email:'' })  
  //Hanlde the input value and set input state
  function HandleInput(e) {
    setValues( currentState => ({ 
          ...currentState,
          [e.target.name] : e.target.value
        })
    )
  }
    
  //Set the state for output after click on go button
  function HandlSubmit() {
    // this.setState({ opt1 : this.HnadleOutput(this.state.input1, this.state.input2)})
    // this.setState({ opt2 : this.HnadleOutput(this.state.input2, this.state.input1)})
  }

  return <div className="">
    <fieldset>
      <legend>Answer:</legend>
      <form className=""> {values.name}
        <input type="button" name="name" onChange={ (e)=> HandleInput(e) } value={values.name} value="Btn" /> &nbsp;
        <input type="button" name="email" onChange={ (e)=> HandleInput(e) } value={values.email}  value="Btn2" />
        <button className="btn" type="button" onClick={() => HandlSubmit() }>Go</button>
      </form>
      {/* Output table */}
    
    </fieldset>
  </div>
  
}

export default TestForm1;
