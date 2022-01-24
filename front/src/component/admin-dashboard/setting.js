import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/baseAxios";
import { AppContext } from "../../context";

function Setting() {
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
    <div className="App">
      <header className="App-header">
        <p className=""> Welcome to user Dashboard</p>
        <fieldset>
          <legend>User details</legend>

          {Object.keys(userList).length > 0 ? (
            <>
              <p className="">
                <label>Name </label>
                <span>
                  {userList.first_name} {userList.last_name}
                </span>
              </p>
              <p className="">
                <label> Email </label>
                <span> {userList.username} </span>
              </p>
              <p className="">
                <label>Phone </label>
                <span> {userList.phone} </span>
              </p>
            </>
          ) : (
            <p>Result not found. </p>
          )}
        </fieldset>
      </header>
    </div>
  );
}

export default Setting;
