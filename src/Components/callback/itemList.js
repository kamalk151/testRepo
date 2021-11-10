import React, { useState,useEffect } from 'react'

function List(props) {

  let [listVal, setListVal] = useState([])
  let [callCunter, setCallCunter] = useState(1)

  useEffect(() => {    console.log('list')
  
  setCallCunter(preState => preState++)
    setListVal(props.list)
    console.log(props.list)
  },[props.list])
  

  return (
    <div className="App">
        <h1> List Item {callCunter} </h1>
        <ul className="">
          {
            listVal.map((number,ley) => <li key={ley} className=""> {number} </li>)
          }
        </ul>
    </div>
  );

}

export default List;
