import React,{Component} from "react";
import { Form,Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

class Signup extends Component{

  constructor(props) {
      super(props)
      this.state = {
        name:'kamla',
        email:'k@yopmail.com',
        password:'123456',
        msg:'',
        status : false
      }
      this.propName = this.props.gunName
      this.formId = React.createRef()
      
  }

  inputHandle = (e) =>{
    this.setState({...this.state, [e.target.name]: e.target.value})
  }

  componentDidMount(){  
     this.formId.current.setAttribute("style", "background-color: #ddd;")
  }

  formSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('userDetail', JSON.stringify({ name:this.state.name,email:this.state.email,password:this.state.password}))  
    this.setState({...this.state, msg: 'User Signup Successfully', status:true})    
  }

  render() {
    if(this.state.status) {
      return <Redirect to='/login' />
    }
    return <div className="col-md-6" id="t_signup" ref={this.formId}>
      <fieldset>       
        
        <legend>Signup Form</legend>
          <Form className="" onSubmit={this.formSubmit}> 
            <Form.Group>
              <Form.Label> Name</Form.Label>
              <Form.Control name="name" placeholder="Enter Name" onChange={(e) => this.inputHandle(e) } value={this.state.name} />
            </Form.Group>
            <Form.Group>
              <Form.Label> Email </Form.Label>
              <Form.Control name="email" placeholder="Enter Email" onChange={(e) => this.inputHandle(e) } value={this.state.email}  />
            </Form.Group>
            <Form.Group>
              <Form.Label> Password </Form.Label>
              <Form.Control type="password" name="password" placeholder="Enter Password" onChange={(e) => this.inputHandle(e) } value={this.state.password}  />
            </Form.Group>
            <Button type="submit" variant="primary" className="mt-5"> Submit</Button>
          </Form>
      </fieldset>      
      <h1 variant="primary"> { this.state.msg } </h1>
    </div>
  }

}

export default Signup;
