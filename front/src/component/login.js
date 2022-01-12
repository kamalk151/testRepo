import { useState, useContext } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "./api/baseAxios";
import { AppContext } from "./../context";
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
        password: password      
      })
      .then(({ data }) => {
        console.log(contextApi,'kkkk=== ')
        contextApi.dispatchUserEvent("login", {
          loginStatus: true,
          userData: data,
          token: data.token,
        });
        console.log(data, "======");
        alert("Successfully logged-in");
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
    <Container>
      <div className="col-md-6">
        <p className=""> Welcome to our site signup</p>
        <Form action="/" method="post" onSubmit={formHandler}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              value={username}
              onChange={(e) => setUsername(e.target.value.trim())}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value.trim())}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="gender">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <p className="mt-3 text-center">
          Password don`t have remember
          <Link to="/forget" className="">
            Forget password
          </Link>
        </p>

        <p className="text-center">
          Don`t have account
          <Link to="/signup" className="">
            SignUp
          </Link>
        </p>
      </div>
    </Container>
  );
}

export default Login;
