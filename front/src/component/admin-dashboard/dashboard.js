import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./../api/baseAxios";
import AppContext from "../../context";

function Dashboard() {
  let navigate = useNavigate();
  let [userList, setUser] = useState({});
  let contextApi = useContext(AppContext);

  useEffect(() => {    
    getUsers();
  }, [contextApi.users.token]);

  async function getUsers() {
    console.log(contextApi.users.userData);
    await axios
      .post(
        "http://localhost:1000/users/user-details",
        {
          id: contextApi.users.userData._id,
        },
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            authorization: `Bearer ${contextApi.users.token}`,
          },
        }
      )
      .then(({ data }) => {
        //console.log(data, "fronted");
        setUser(data.data);
        if (data.token !== undefined) {
          contextApi.dispatchUserEvent("updateToken", { token: data.token });
        }
      })
      .catch((err) => {
        if (err.response) {
          return navigate("/logout");
        }
      });
  }
  return (
     
    <div className="col-lg-12">
      <div className="au-card au-card--no-shadow au-card--no-pad m-b-40 au-card--border">
        <div className="au-card-title"> 
        Welcome to dashboard  
        </div>
      </div>
    </div>
     
  );
}

export default Dashboard;
