import React from "react";
import { Link } from "react-router-dom";

function WrappedComponent(NewComponent) {
  
  return class extends React.Component {
    
    render() {
      return <NewComponent />
    }
  }
  
}

export default WrappedComponent;
