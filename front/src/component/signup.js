import { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "./api/baseAxios";

import { Form, Button, Container } from "react-bootstrap";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      phone: "",
      checkbox: "1",
      gender: "",
    };
  }

  inputHandler = (e) => {
    this.setState((previousState) => {
      return (previousState[e.target.name] = e.target.value);
    });
  };

  formSubmit = (e) => {
    e.preventDefault();

    let form_data = {
      username: this.state.username,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      password: this.state.password,
      phone: this.state.phone,
      gender: this.state.gender,
    };
    axios
      .post("auth/create", form_data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        alert("Successfull save data.");
        this.props.navigate("/login");
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.message);
      });

    return false;
  };

  render() {
    return (
      <Container>
        <div className="col-md-8">
          <h2 className=""> SingUp with us to see more feature. </h2>
          <hr />
          <form action="/" method="post" onSubmit={this.formSubmit}>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="first_name"
                value={this.state.first_name}
                onChange={(e) => this.inputHandler(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="last_name">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="last_name"
                value={this.state.last_name}
                onChange={(e) => this.inputHandler(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter email"
                value={this.state.username}
                onChange={(e) => this.inputHandler(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={this.state.password}
                name="password"
                onChange={(e) => this.inputHandler(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={this.state.phone}
                onChange={(e) => this.inputHandler(e)}
                placeholder="Enter phone"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="gender">
              <Form.Label className=""> Gender </Form.Label>
              <Form.Check
                type="radio"
                label="Male"
                value="Male"
                name="gender"
                onChange={(e) => this.inputHandler(e)}
              />
              <Form.Check
                type="radio"
                label="female"
                name="gender"
                value="Female"
                checked
                onChange={(e) => this.inputHandler(e)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </form>
          <p className="text-center">
            Existing users
            <Link to="/login" className="">
              SignIn
            </Link>
          </p>
        </div>
      </Container>
    );
  }
}

function WithNavigate(props) {
  let navigate = useNavigate();
  return <Signup {...props} navigate={navigate} />;
}

export default WithNavigate;
