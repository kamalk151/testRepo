 
import Buttons from './Buttons'
import cakeAction from './../Actions/Cake.action';
import {useDispatch, useSelector} from 'react-redux'


function Cake() {
  let numOfCake = useSelector(state => state.cake.numOfCake)   
  let dispatch = useDispatch()
  
  
  console.log(cakeAction, numOfCake, 'numb');
  
  return (
    <div className="App">
       Cake
       <hr />
       { numOfCake }
       <button onClick={() => dispatch(cakeAction.buy_cake()) }> Increment </button>
       <button onClick={() => dispatch(cakeAction.sell_cake(-3)) }> Decrement </button>

    </div>
  );
}

export default Cake;
