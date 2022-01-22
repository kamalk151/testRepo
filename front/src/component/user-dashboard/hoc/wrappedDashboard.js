import { Link } from "react-router-dom";

function WrappedComponent(NewComponent) {
  return (
    <>
      <h1> hi </h1>
      <NewComponent />
      // HEADER DESKTOP
    </>
  );
}

export default WrappedComponent;
