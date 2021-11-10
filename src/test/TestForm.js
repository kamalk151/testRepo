import React, {Component} from 'react'
import Table from './Table'
class TestForm extends Component {
  constructor() {
    super();
    this.state = {
      input1:'',
      input2:'',
      opt1:'',
      opt2:'',
    }
    this.handleInput = this.HandleInput.bind()
  }
  //Hanlde the input value and set input state 
  HandleInput(e) {    
    this.setState( {[e.target.name] : e.target.value})
  }
  //Hanlding the output value by calling from HandleSubmit()
  HnadleOutput = (str1, str2 ) =>{
    let newStr = str1;
    for(let val of str2){
      newStr = newStr.replaceAll(val, '')
    }    
    if(newStr.length == 0){
      newStr = 'null';
    }
    return newStr
  }
  //Set the state for output after click on go button
  HandlSubmit() {   
      this.setState({ opt1 : this.HnadleOutput(this.state.input1, this.state.input2)})
      this.setState({ opt2 : this.HnadleOutput(this.state.input2, this.state.input1)})
  }
  render() {
    return <div className="">
      <fieldset>
        <legend>Answer:1</legend>
        <form className="">
          <input type="text" name="input1" onChange={(e)=> this.HandleInput(e)} value={this.state.input1} placeholder="Enter Str1"/> &nbsp;
          <input type="text" name="input2" onChange={(e)=> this.HandleInput(e)} value={this.state.input2} placeholder="Enter Str2"/>
          <button className="btn" type="button" onClick={() => this.HandlSubmit() }>Go</button>
        </form>           
        {/* Output table */}
        <Table label="Output table" {...this.state} />
        </fieldset>
    </div>
  }
}
export default TestForm;
