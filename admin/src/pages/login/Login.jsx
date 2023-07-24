import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/apiCalls";
import "./login.css";
import {useHistory} from "react-router-dom";

const Login = () => {
    const navigate= useHistory();
    const [username,setUsername]= useState("");
    const [password,setPassword]= useState("");
    const dispatch= useDispatch();

    const handleClick=(e)=>{
        e.preventDefault();
        login(dispatch,{username,password},navigate.push('/'));
           
    };

  return (
    <div className='container1 form '>
        <h2 className='title' style={{textTransform:'uppercase'}}>Ans-Boutique</h2>
        <input className='input' type="text" 
        placeholder='Username'
        onChange={(e)=>setUsername(e.target.value)} /><br/>
        <input className='input' type="password"
         placeholder='Password'
          onChange={(e)=>setPassword(e.target.value)} /><br/>
        <button className='button' onClick={handleClick} >Connexion</button><br/>
    </div>
  )
}

export default Login