import { useState, useContext } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "./api/baseAxios";
import AppContext from "./../context";
import { Link, useNavigate } from "react-router-dom";
/**
 *
 * @returns
 */
function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let contextApi = useContext(AppContext);
  let navigate = useNavigate();

  let formHandler = async (e) => {
    e.preventDefault();
    if (!password || !username) {
      alert("All field is required");
      return false;
    }
    /* Submit request to api */

    await axios
      .post("auth/login", {
        username: username,
        password: password,
      })
      .then(({ data }) => {
        console.log(data, "======");
        alert("Successfully logged-in");
        contextApi.dispatchUserEvent("login", {
          loginStatus: true,
          userData: data.data,
          token: data.token,
          role: data.data.role.role,
        });
        navigate("/about");
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
    /* end Submit request to api */
  };

  return (
    <Container className="container">
      <div className="screen">
        <div className="screen__content">
          <Form
            action="/"
            method="post"
            onSubmit={formHandler}
            className="login"
          >
            <Form.Group className="  login__field" controlId="email">
              <i className="login__icon fas fa-user"></i>
              <Form.Control
                type="text"
                className="login__input"
                placeholder="Enter email*"
                value={username}
                onChange={(e) => setUsername(e.target.value.trim())}
              />
            </Form.Group>

            <Form.Group className="mb-3 login__field" controlId="password">
              <Form.Control
                type="password"
                className="login__input"
                placeholder="Enter Password*"
                value={password}
                onChange={(e) => setPassword(e.target.value.trim())}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="gender">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Button variant="" type="submit" className="button login__submit">
              Submit
            </Button>
          </Form>
          <p className="mt-3 text-center">
            Password don`t have remember &nbsp;
            <Link to="/forget" className="color-w">
              Forget password
            </Link>
          </p>

          <p className="text-center">
            Don`t have account&nbsp;
            <Link to="/signup" className="color-w">
              SignUp
            </Link>
          </p>
          {/* <div className="social-login">
            <h3>log in via</h3>
            <div className="social-icons">
              <a href="#" className="social-login__icon fab fa-instagram"></a>
              <a href="#" className="social-login__icon fab fa-facebook"></a>
              <a href="#" className="social-login__icon fab fa-twitter"></a>
            </div>
          </div> */}
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </Container>
  );
}

export default Login;
