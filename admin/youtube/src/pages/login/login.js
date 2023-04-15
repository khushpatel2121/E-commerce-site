import React ,{useState}from 'react';
import "./login.css"
import {useDispatch} from "react-redux"
import { login } from '../../redux/apiCalls';

const Login = () => {
   const [username,setUserName] = useState("");
   const [password,setPassword] = useState("");
   const dispatch = useDispatch();

   const handleClick = (e)=>{
    e.preventDefault();
    login(dispatch,{username,password})
   }


  return (
    <div className='container'>
      <div className='wrapper'>
      <h1>HAPPY STORE.</h1>
      <span>Admin login</span>
        <form className='form'>
            <input placeholder="username" type="text"/>
            <input placeholder='password' type="password"/>
            <button onClick={handleClick} className='loginButton'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
