import React from "react";
import { useEffect,useRef } from "react";

function Hello() { 

   let usref = useRef(0)
   console.log(usref.current, 'hello')

  useEffect(() => {
    console.log('render-1')

    return () => {
      console.log('delete! Unmount hhhhhh')
    }
  },[])

  return <div className="">
    <fieldset>
      <legend>Tesster:</legend>
       Hello, I am tester.
      {/* Output table */}    
    </fieldset>
  </div>
}

export default React.memo(Hello);
