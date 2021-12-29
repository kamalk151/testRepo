import {Form,Button,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function login() {
  let formHandler = (e) =>{
    e.preventDefault()
  }
  

  return (
    <Container>
      <div className="col-md-6">
        <p className=""> Welcome to our site signup</p>
        <Form action="/" method="post" onSubmit={formHandler}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />             
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="gender">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <Button variant="primary" type="submit">  Submit </Button>
        </Form>
      
      <p className="mt-3 text-center">
        Password don`t have remember <Link to="/forget" className=''>Forget password</Link></p>

      <p className="text-center">Don`t have account <Link to="/signup" className=''>SignUp</Link></p>
      </div>
      </Container>
  );
}

export default login;
