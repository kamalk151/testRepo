import React, {Component, useContext, useState} from 'react'
import axios from 'axios'
class UserData extends Component {
  state = {
    userId: '',
    emailId:'Not Found'
  }
  // Handle input data
  InputHandle = (e) =>  {
    if(isNaN(e.target.value)){
      alert('it is not a number. Please enter numbers only.')
      return false
    }
    this.setState({ userId: e.target.value })
  }
  // Handle form data
  HandleSubmit() {    
    if(this.state.userId){
        axios.get('https://reqres.in/api/users/' + this.state.userId)
        .then((res)=> {
          let resData = res.data
          this.setState({emailId: resData.data.email})
          console.log(res)
        })
        .catch(err=>{
          alert('Sent something wrong on the server!')
          this.setState({emailId: 'Not Found'})
        })
    }
  }  
  render() {
    return <div className="">
      <br />      <br />    
      <b> {this.props.label}</b>
      <br />
      <fieldset>
        <legend>Answer:2</legend>
      <form className="">
        <input type="text" required className="" value={this.state.userId} onChange={(e) => this.InputHandle(e) } placeholder="Enter User Id" /> 
        <button type="button" className="" onClick={ () => this.HandleSubmit() } > Submit </button>       
      </form>
      <br />
      <b> Expected Output: </b> {this.state.emailId}
      </fieldset>
    </div>
  }
}
export default UserData;
