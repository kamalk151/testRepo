import {Form,Button,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function forget() {
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
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="confirm_password">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Enter confirm password" />
          </Form.Group>

          <Button variant="primary" type="submit">  Submit </Button>
        </Form>
          <p className="text-center"> Existing Users <Link to="/login" className=''>SignIn</Link></p>
      </div>
      </Container>
  );
}

export default forget;
