import { useEffect, useState, useContext, Component } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/baseAxios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      first_name: "",
      last_name: "",
      gender: "",
      username: "",
      phone: "",
      createdAt: "",
      news: "",
    };
  }

  /* getting the users detials */
  getUsers = async (data) => {
    console.warn(data.token, "toekn");
    await axios
      .post(
        "users/user-details",
        {
          id: data.userData._id,
        },
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            authorization: `Bearer ${data.token}`,
          },
        }
      )
      .then(({ data }) => {
        this.setState(
          {
            first_name: data.data.first_name,
            last_name: data.data.last_name,
            gender: data.data.gender,
            username: data.data.username,
            phone: data.data.phone,
            createdAt: data.data.createdAt,
          },
          () => {
            console.log(this.state, " updated state value in profile");
          }
        );
      })
      .catch((err) => {
        console.warn(err, "warr");
        if (err.response) {
          return this.props.navigate("/logout");
        }
      });
  };

  /* Update the user info */
  update = async (e) => {
    e.preventDefault();
    let userData = {
      id: this.props.users.userData._id,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      username: this.state.username,
      phone: this.state.phone,
    };
    console.log(userData, "user data");
    this.setState({news:userData.first_name})
    let headers = {
      headers: {
        authorization: `Bearer ${this.props.users.token}`,
      },
    };
    await axios
      .patch("users/update-by-id", userData, headers)
      .then((res) => {
        console.warn(res);
        res.statusText === "OK" && alert(res.data.msgText);
      })
      .catch((err) => {
        console.log(err, "errs");
        if (err.response) {
          alert("Something went wrong! Please try again later.");
        }
      });
  };

  componentDidMount() {
    this.getUsers(this.props.users);
    console.log('asdf asdfasd')
  }

  componentWillUpdate() {
    console.log('will update')
  }

  componentDidUpdate(){
    console.log('did update')
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
            <form
              action=""
              method="post"
              noValidate="novalidate"
              onSubmit={this.update}
            >
              <div className="form-group">
                <label htmlFor="name" className="control-label mb-1">
                  First Name
                </label>
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  className="form-control"
                  value={this.state.first_name}
                  onChange={(e) =>
                    this.setState({ first_name: e.target.value })
                  }
                />
              </div>
              <div className="form-group has-success">
                <label htmlFor="last_name" className="control-label mb-1">
                  Last Name
                </label>
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  className="form-control cc-name valid"
                  autoComplete="last name"
                  value={this.state.last_name}
                  onChange={(e) => this.setState({ last_name: e.target.value })}
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
                  value={this.state.username}
                  onChange={(e) => this.setState({ username: e.target.value })}
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
                  value={this.state.phone}
                  onChange={(e) => this.setState({ phone: e.target.value })}
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
  const navigate = useNavigate();
  return <Profile {...props} navigate={navigate} />;
}
export default WithNavigate;
