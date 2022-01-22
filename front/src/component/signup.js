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
      gender: "Female",
    };
  }

  inputHandler = (e) => {
    this.setState((previousState) => {
      return (previousState[e.target.name] = e.target.value);
    });
  };

  validateAllField = (form_data) => {
    console.log(form_data, "=form_data");

    return Object.keys(form_data).every((key) => {
      return form_data[key].trim() !== "";
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

    let errorVal = this.validateAllField(form_data);
    if (errorVal === false) {
      alert("Please fill required field.");
      return false;
    }

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
      .catch((error) => {
        if (error.response) {
          // Request made and server responded
          alert(error.response.data.msgText);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });

    return false;
  };

  render() {
    return (
      <Container>
        <div className="signup_screen">
          <div className="signup_screen__content">
            <h4 className="mt-3"> SingUp with us to see more feature. </h4>
            <hr />
            <form
              action="/"
              method="post"
              onSubmit={this.formSubmit}
              className="signup"
            >
              <Form.Group className="mb-3 signup__field" controlId="firstName">
                <Form.Control
                  type="text"
                  placeholder="Enter first name*"
                  name="first_name"
                  value={this.state.first_name}
                  className="signup__input"
                  onChange={(e) => this.inputHandler(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3 signup__field" controlId="last_name">
                <Form.Control
                  type="text"
                  placeholder="Enter last name*"
                  name="last_name"
                  className="signup__input"
                  value={this.state.last_name}
                  onChange={(e) => this.inputHandler(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3 signup__field" controlId="email">
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter email*"
                  value={this.state.username}
                  className="signup__input"
                  onChange={(e) => this.inputHandler(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3 signup__field" controlId="password">
                <Form.Control
                  type="password"
                  placeholder="Enter Password*"
                  value={this.state.password}
                  name="password"
                  className="signup__input"
                  onChange={(e) => this.inputHandler(e)}
                />
              </Form.Group>
              <Form.Group className="signup__field">
                <Form.Control
                  type="text"
                  name="phone"
                  className="signup__input"
                  value={this.state.phone}
                  onChange={(e) => this.inputHandler(e)}
                  placeholder="Enter phone*"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 mr-5 signup__field"
                controlId="gender"
              >
                <Form.Label className="mr-5 ml-5"> Gender </Form.Label>
                <Form.Check
                  type="radio"
                  label="Male"
                  value="Male"
                  name="gender"
                  className="ml-5 form-check-ext"
                  onChange={(e) => this.inputHandler(e)}
                />
                <Form.Check
                  type="radio"
                  label="female"
                  className="ml-5 form-check-ext"
                  name="gender"
                  value="Female"
                  checked
                  onChange={(e) => this.inputHandler(e)}
                />
              </Form.Group>

              <Button variant="" type="submit" className="signup__submit">
                Submit
              </Button>
            </form>
            <p className="text-center">
              Existing users &nbsp;
              <Link to="/login" className="">
                Sign-In
              </Link>
            </p>
          </div>

          <div className="screen__background">
            <span className="signup_screen__background__shape signup_screen__background__shape4"></span>
            <span className="signup_screen__background__shape signup_screen__background__shape3"></span>
            <span className="signup_screen__background__shape signup_screen__background__shape2"></span>
            <span className="signup_screen__background__shape signup_screen__background__shape1"></span>
          </div>
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
