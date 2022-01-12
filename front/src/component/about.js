import "./../assets/login.css";
import {useContext} from 'react'
import {AppContext} from './../context'

function About() {
  const contextApi = useContext(AppContext);

  
  return (
    console.log(contextApi) ,
    <div className="App">
      <header className="App-header">
        <p className=""> Welcome to our site about</p>
      </header>
    </div>
  );
}

export default About;
