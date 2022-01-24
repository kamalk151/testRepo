import { useContext, useEffect } from "react";
import axios from "./api/baseAxios";
import { AppContext } from "../context";
import { useNavigate } from "react-router-dom";

/**
 *
 * @returns
 */
function Logout() {
  let contextApi = useContext(AppContext);
  let navigate = useNavigate();
  useEffect(async () => {
    console.log("logout");
    logoutApi();
    contextApi.dispatchUserEvent("logout");
    navigate("/login");
  }, []);

  function logoutApi() {
    axios
      .post(
        "auth/logout",
        {},
        {
          headers: {
            authorization: `Bearer ${contextApi.users.token}`,
          },
        }
      )
      .then((res) => {
        console.log(res, "err = == ");
      })
      .catch((err) => {
        console.log(err, "err === ");
      });

    return true;
  }

  return true;
}

export default Logout;
