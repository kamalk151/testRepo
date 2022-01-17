import { useEffect, useState } from 'react'
import axios from './../api/baseAxios'
/**
 *
 */
function Dashboard() {
  const [user, setUser] = useState([])

  useEffect(() => {
    userList();
  },[]);

  function userList() {
    axios.get('admin/user-list')
    .then(result => {
      setUser(result.data)
      //console.log(result)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    console.log(user),
    <div className="App">
      <header className="App-header">
        <p className=""> Welcome to our admin site </p>
        <table className='table'>
          <thead>
            <tr>
              <th className=''>Name</th>
              <th className=''>Role</th>
              <th className=''>Username</th>
              <th className=''>Phone</th>
              <th className=''>Gender</th>
            </tr>          
          </thead>
        <tbody>
         { user && user.data && user.data.map((val,index)=>{
          return <tr key={index}>
            <th className=''> {val.first_name + ' ' + val.last_name } </th>
            <th className=''> {val.role_id } </th>
            <th className=''> {val.username } </th>
            <th className=''> {val.phone } </th>
            <th className=''> {val.gender } </th>
          </tr>
         })}
         </tbody>
        </table>
      </header>
    </div>
  );
}

export default Dashboard;
