import { useEffect, useState, useContext, Component } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/baseAxios";
import AppContext from "./../../context";

class Userslist extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      status: [],
      contextData: "",
    };
  }

  /* getting the users detials */
  getUsers = async () => {
    console.log(this.props.contextData.users.token, "----");
    await axios
      .get("admin/user-list", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          authorization: `Bearer ${this.props.contextData.users.token}`,
        },
      })
      .then(({ data }) => {
        this.setState({
          userList: data.data,
          status: this.props.contextData.users.status,
        });

        if (data.token !== undefined) {
          this.props.contextData.dispatchUserEvent("updateToken", {
            token: data.token,
          });
        }
      })
      .catch((err) => {
        if (err.response) {
          //return this.props.navigate("/logout");
        }
      });
  };

  /* getting the users detials */
  deleteUsers = async (userId) => {
    let confirmVar = window.confirm("Are you sure to delete?");
    if (!confirmVar) {
      return false;
    } else {
      await axios
        .delete("admin/user-delete", {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            authorization: `Bearer ${this.props.contextData.users.token}`,
          },
          data: {
            id: userId,
          },
        })
        .then(({ data }) => {
          //update the users list after delete
          this.getUsers();
          if (data.token !== undefined) {
            this.props.contextData.dispatchUserEvent("updateToken", {
              token: data.token,
            });
          }
        })
        .catch((err) => {
          if (err.response) {
            // return this.props.navigate("/logout");
          }
        });
    }
  };

  componentDidMount() {
    let contextData = this.context;
    this.getUsers(contextData);
  }

  render() {
    const userList = this.state.userList;
    const status = this.state.status;
    const loggedInUserId = this.props.contextData.users.userData._id;

    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="table-responsive table--no-card m-b-30">
            <table className="table table-borderless table-striped table-earning">
              <thead>
                <tr>
                  <th>created date</th>
                  <th>user ID</th>
                  <th>name</th>
                  <th className="text-right">phone</th>
                  <th className="text-right">status</th>
                  <th className="text-right">action</th>
                </tr>
              </thead>
              <tbody>
                {userList &&
                  userList.map((val, key) => {
                    console.log(status[val.status]);
                    return (
                      <tr key={key}>
                        <td>{val.createdAt} </td>
                        <td>{val._id}</td>
                        <td>{`${val.first_name} ${val.last_name}`}</td>
                        <td className="text-right">{val.phone}</td>
                        <td className="text-right">
                          {status[val.status] !== "" &&
                          status[val.status] !== undefined
                            ? status[val.status]
                            : "Active"}
                        </td>
                        <td className="text-right">
                          {loggedInUserId !== val._id && (
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={(e) => this.deleteUsers(val._id)}
                            >
                              <i className="fas fa-trash"></i>
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

function WithWrapped(props) {
  let navigate = useNavigate();
  let contextData = useContext(AppContext);
  return <Userslist {...props} navigate={navigate} contextData={contextData} />;
}

export default WithWrapped;
