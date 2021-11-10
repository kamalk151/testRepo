 
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'

function Buttons(props) {
  return (
    <button className="Button" >
       {props.children}
    </button>
  );
}

export default Buttons;
