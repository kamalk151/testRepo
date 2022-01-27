import { useEffect, useState, useContext, Component } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/baseAxios"; 

class Profile extends Component { 
  constructor(props) {
    super(props);     
    this.state = {
      userData:{}
    };
  } 

  getUsers = async (data) => { 
   
    await axios
      .post(
        "users/user-details",
        {
          id: data.userData._id,
        },
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            authorization: `Bearer ${data.userData.token}`,
          },
        }
      )
      .then(({ data }) => {
        console.log(data, "fronted");
        this.setState({userData: data.data});         
      })
      .catch((err) => {
        if (err.response) {
          return this.props.navigate("/logout");
        }
      });
  }

  componentDidMount() { 
    console.log(this.props.users.userData._id,'hhhhh')
    this.getUsers(this.props.users)
  }

  render() {
    
    return ( 
      <div className="row">
        <div className="col-lg-11">
          <div className="card-body">
            <div className="card-title">
              <h3 className="text-center title-2"> Profile Update </h3>
            </div>
            <hr />
            <form action="" method="post" noValidate="novalidate">
              <div className="form-group">
                <label htmlFor="name" className="control-label mb-1">
                  First Name
                </label>
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group has-success">
                <label htmlfor="last_name" className="control-label mb-1">
                  Last Name
                </label>
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  className="form-control cc-name valid"
                  autoComplete="name"
                />
              </div>
              <div className="form-group has-success">
                <label htmlFor="user name" className="control-label mb-1">
                  UserName
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  className="form-control cc-name valid"
                  autoComplete="username"
                />
              </div>
              <div className="form-group has-success">
                <label htmlFor="phone" className="control-label mb-1">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  className="form-control cc-name valid"
                  autoComplete="phone"
                />
              </div>
              <button type="submit" value="Update" className="btn btn-primary">
                Update
              </button>
            </form>
          </div>
        </div>
      </div> 
    );
  }
}

function WithNavigate(props) {
  const navigate = useNavigate()
  return <Profile {...props} navigate={ navigate } /> 
}
export default WithNavigate;
