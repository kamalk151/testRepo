import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./../api/baseAxios";
import AppContext from "../../context";

function Dashboard() {
  let navigate = useNavigate();
  let [userList, setUser] = useState({});

  return (
    <div className="col-lg-12">
      <div className="au-card au-card--no-shadow au-card--no-pad m-b-40 au-card--border">
        <div className="au-card-title">Welcome to dashboard</div>
      </div>
    </div>
  );
}

export default Dashboard;
