import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Link, Route} from 'react-router-dom';
import {Provider, useSelector, useDispatch} from 'react-redux';
import Dashboard from './Components/dashboard/index';
import Admin from './Components/admin/index';
import Store from './Store/cake.store';
import Index from './Components/index';
import LoginPage from './Components/Login';
import Signup from './Components/Signup';
import ProtectRoute from './ProtectRoute';
import UserAction from './Actions/User.action';
import UseLocalStorag from './Components/customHooks/index';

function App() { 
  let themeValue =  {
    backgroundColor: '#ddd'
  }
  
  return (
    <Provider store={Store} >      
      <div className="App">
          <Header /> 
          <hr />
          <Switch>
            <Route path="/" exact ><Index gunName="Ak27" /></Route>
            <Route path="/login" ><LoginPage gunName="Ak27" /></Route>
            <Route path="/signup" ><Signup gunName="Ak27" /></Route>
            <ProtectRoute component={Dashboard} path="/dashboard" gunName="Dashboard"/>
            <ProtectRoute component={Admin} path="/admin" gunName="Admin"/>
            <Route path="*" render={() => {
              return <h1>No Match</h1>
            }}>
            </Route>
          </Switch>
      </div>
    </Provider>
  );
}

/*Define the menu */
function Header(props) {
  let userDetail  = useSelector(state => state.user)  
  let dispatch = useDispatch()
  let userDetailLocal  = UseLocalStorag({type:'get', itemKey:'userDetail' })    
  if(userDetailLocal && userDetailLocal.email) {
    let userStr = {...userDetailLocal, isAuth:true, _token:'token'};        
    dispatch(UserAction.Login(userStr));  
  }

  let logout = () => {     
    localStorage.removeItem('userDetail')
    dispatch(UserAction.Logout())
  }

  const link = ((userDetail.isAuth != true) ? (<>
              <Link className="pdl-10" to="/login"> Login </Link>
              <Link className="pdl-10" to="/signup"> Signup </Link>
              </>)
              : (<>
                <Link to="/dashboard" > Dashboard </Link>
                <Link className="pdl-10" to="/" onClick={logout}> Logout </Link>
              </>))
  return (
    <div className="header">         
      <Link className="pdl-10" to="/"> Home </Link>
      <Link className="pdl-10" to="/admin"> Admin </Link>
      {/* Display conditional if else*/}
      {link}      
    </div>
  )
}

export default App;
