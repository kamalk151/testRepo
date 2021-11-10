import { useEffect,useRef } from "react";
 
function Counter(props) { 

   
  return <div className="">
    <fieldset>
       {console.log('asdfasd')}
      <legend>Tesster:</legend>
       Hello, I am Counter {props.counter}.
       <button type="button" className="" onClick={props.handler}>Counter</button>
      {/* Output table */}   
       
    </fieldset>
  </div>
}

export default Counter;
