import React,{ useEffect } from "react";

let useFetch = (url) =>  { 
  let [state, setState] = React.useState({data: '', loading:true })
  setState(state=> ({data:state.data, loading:true}))
  useEffect(async () => {
    console.log('render',url)
    await fetch(url)
    .then((res)=>{
      return res.text()
    })
    .then(res=>{
       setState({data:res,loading:false})
    })
    //
  },[])

   return state
}

export default useFetch;
