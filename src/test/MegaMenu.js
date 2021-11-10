 
import { Component } from 'react';
import Hoc from './Hoc'

class GunShot extends Component {
  render() {
    console.log('render')
    return <div className="">
    
      <input type="button" className="" value="Button" onClick={ (e) => this.props.hocHandler() } placeholder="Search" />
         {this.props.hocShot}
    </div>
  }

}

export default Hoc(GunShot);
