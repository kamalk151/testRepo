import { Component } from "react";
import {Link} from 'react-router-dom';
import axios from './api/baseAxios'
import {Form, Button,Container} from 'react-bootstrap'

class Signup extends Component {

  formHandler = (e) => {
    e.preventDefault()
    
  }

  render() {
    return (
      <Container>
      <div className="col-md-8">
        <h2 className=""> SingUp with us to see more feature. </h2>
        <hr/ >
        <Form action="/" method="post" onSubmit={this.formHandler}>
          
        <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" />             
          </Form.Group>

          <Form.Group className="mb-3" controlId="last_name">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter last name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />             
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="gender">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">  Submit </Button>
        </Form>
        <p className="text-center"> Existing users <Link to="/login" className=''>SignIn</Link></p>
      </div>
      </Container>
    );
  }
}

export default Signup;
