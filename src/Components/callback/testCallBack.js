import React, {useContext, useState, useRef, useMemo} from 'react'
 
import Counter1 from './counter1';
import List from './itemList'

function TestCallBack(props) {

  let inputRef = useRef()
  let [inpVal, setVal ] = useState(1)
  let [countVal, setCountVal ] = useState(1)
  let numVal = useMemo(()=> slowerNum(inpVal),[inpVal])

  function handler() {
    setCountVal(preCount => preCount + 1)
  }

  let obj = useMemo(()=>{
    return {
      name:'kamla',
      age: 'test'
    }
  } ,[])

  let returnList = useMemo(() => {
    return [inpVal, inpVal+1, inpVal+2]
  },[inpVal])

  return (
    
    <div className="App"> 
        <h1> CallBack </h1>
        { props.gunName }
          <input type="text" name="inp1" value={ inpVal } onChange={ e => setVal( parseInt(e.target.value)) } ref={ inputRef } />
          <input type="button" className="" value="Gun Fire" onClick={ e => handler(e) } placeholder="Search" />
        <Counter1  val={countVal} test={obj} />
        {numVal}
        <List list = {returnList} />
    </div>
  );

}

function slowerNum(num) {
  let nm = 0;
  for(let i =1; i<200000000; i++) {
    nm += i;
  }
  return (nm * num)
}

export default TestCallBack;
