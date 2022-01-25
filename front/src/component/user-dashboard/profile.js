import { useEffect, useState, useContext, Component } from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import { useNavigate } from "react-router-dom";
import axios from "../api/baseAxios";
import { AppContext } from "./../../context";

class Profile extends Component {
  constructor() {
    super();
    this.context = consumer(AppContext);
    this.state = {
      contextApi: this.context,
    };
  }
  render() {
    console.log(this.state.contextApi, "=====", AppContext);
    return (
      <div className="row">
        <div className="col-lg-11">
          <div className="card-body">
            <div className="card-title">
              <h3 className="text-center title-2"> Profile Update </h3>
            </div>
            <hr />
            <form action="" method="post" novalidate="novalidate">
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
                <label htmlforor="user name" className="control-label mb-1">
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
                <label htmlfor="phone" className="control-label mb-1">
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

export default Profile;
