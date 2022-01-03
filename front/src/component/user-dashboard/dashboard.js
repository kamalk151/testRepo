import {useEffect,useState} from 'react'
import axios from 'axios'
function Dashboard() {
  let userList = useState([])
  
  const refreshToken = (req,res,next) => {
    console.log(req,'=====')
  }

  useEffect(()=>{
    getUsers();
  },[]);
  
  function getUsers(){
    axios.post('http://localhost:1000/auth/user-list')
    .then(result => {
      console.log(result.data);      
    })
    .catch(err => {
      console.log(err)
      
      if(err.response){
        console.log(err.response)
      }
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <p className=""> Welcome to user Dashboard</p>
      </header>
    </div>
  );
}

export default Dashboard;
