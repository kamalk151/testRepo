 
import { Component } from 'react'; 

function Hoc(NewComp) {
  
  class ModifyComp extends Component {
    state = {
      gunShot: 0,
      gunShot1:1
    }
    
    increments = () => {
      this.setState({...this.state, gunShot: this.state.gunShot + 1})
    }

    render () {
      return <>
          {this.props.gunName}
        <NewComp hocHandler = {this.increments } hocShot={this.state.gunShot} />
      </>
    }
  }

  return ModifyComp
  
}


export default Hoc;
