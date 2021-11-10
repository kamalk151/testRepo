import React, {useContext, useState} from 'react'
import {withRouter} from 'react-router-dom'
let i =1
function useCommonHook(props) {  
  console.log('d',i) 
  alert(i++)
  return true
}

export default withRouter(useCommonHook);
