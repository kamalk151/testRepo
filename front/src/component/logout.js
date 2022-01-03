import { useContext, useEffect } from "react";

import { AppContext } from "../context";
import { useNavigate } from "react-router-dom";
/**
 *
 * @returns
 */
function Logout() {
  let contextApi = useContext(AppContext);
  let navigate = useNavigate();
  useEffect(() => {
    console.log("logout");
    contextApi.dispatchUserEvent("logout");
    navigate("/");
  }, []);

  return true;
}

export default Logout;
