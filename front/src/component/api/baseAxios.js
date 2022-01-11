import {useContext} from 'react';
import axios from 'axios';
import {AppContext} from './../../context'
const instanse = axios.create({
  baseURL:'http://localhost:1000/',
  withCredentials: true,

})

instanse.interceptors.request.use(function(req) {
  
  return req
})

export default instanse;
