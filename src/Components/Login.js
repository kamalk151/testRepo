import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {Form, Button} from 'react-bootstrap'
import useLocalStorag from './customHooks/index'
import userAction from './../Actions/User.action';

function LoginPage(props) {
  let dispatch = useDispatch()
  let userDetail  = useLocalStorag({type:'get', itemKey:'userDetail' })    
  let [email, setEmail] = useState('k@yopmail.com')
  let [password, setPassword] = useState('123456')
  let [msg, setMsg] = useState('')
  let history = useHistory()

  useEffect(() => {
    if(userDetail && userDetail.isAuth) {
      history.push('/')
    }
  })
  
  let formHandler = (e) => {
    e.preventDefault();
    if(userDetail && userDetail.email == email) {
      let userStr = {...userDetail, isAuth:true, _token:'token'};
      localStorage.setItem('userDetail', JSON.stringify(userStr));     
      dispatch(userAction.Login(userStr));
      history.push('/')      
    } else {
      setMsg('Invalid Credential!')
    }
  }
   
  return (
      <div className="col-md-6">
        <fieldset>        
          <legend> Login Form: {props.name} d</legend>
          <Form action="/dashboard" onSubmit={formHandler} className="col-md-12">
            <Form.Group controlId="username">
              <Form.Label className="pd-5 mr-10"> Email Address </Form.Label> 
              <Form.Control value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Email"/>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label className="pd-5 mr-10"> Password </Form.Label> 
              <Form.Control type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
            </Form.Group>
            <Button variant="primary" className="mt-2" type="submit" > Submit </Button>
          </Form>
        </fieldset>
        <h1 variant="primary"> { msg } </h1>
      </div>
    );
}

export default LoginPage;
