import React, {useEffect, useState, useRef, useMemo} from 'react'
import { useParams } from 'react-router';
import useForm from './FormHooks';
import formHooks from './FormHooks';
import ThreeList from './ThreeList';
import Counter from './Counter';


function TestForm() { 
  
  let [values, inputHandler] = formHooks({ count:0, count2:0,test:0 })
  let [counter,setCounter] = useState(0)
  let [flag, setFlag] = useState(true)
  const inputRef= useRef();
  // const {data, loading} = useFetch(`http://numbersapi.com/${values.count}/trivia`)
   let num = useMemo (() => counts(4), [values.count])
   
  function focusEvents() {
    alert(inputRef.current.value)
    console.log(inputRef.current)
    //console.log(document.getElementById('input1'))
  }
 
  useEffect(() => {
    console.log('render') 
  }, [ values.count ])

  return <div className="">
    <fieldset>
      <legend>Answer:</legend>
      <form className="">
     {/*loading == false? data : 'Loading.....'*/}
      
      { <Counter handler = {() => setCounter(counter => counter+1) } counter = {counter} /> }
        { values.count }
        <br /> 
        <input ref={inputRef} type="text" name="test"  id="input1" value={values.test} onChange={(e)=> inputHandler(e)} /> &nbsp;
        <ThreeList inputVal={inputRef.current} />
        <button type="button" name="count" onClick={ (e)=> inputHandler(e) }   value={values.count}> btn1 </button> &nbsp;

        <br />   { values.count2 }
        <button type="button" name="count2" onClick={ (e)=> inputHandler(e) } value={values.count2}> Btn2 </button>

        <button className="btn" type="button" onClick={() => setFlag(!flag) }> Show hello {flag} </button>

        <button className="btn" type="button" onClick={() => focusEvents() }>Foucs {flag} </button>
      </form>
      {/* Output table */}
    
    </fieldset>
  </div>
  
}

function counts(num) {
  console.log(num, 'num')
   
}

export default TestForm;
