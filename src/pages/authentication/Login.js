import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";

import Input from "./../../components/forms/Input.js"
import Card from "../../components/layouts/Card";
import Button from "../../components/layouts/Button.js";
import {AuthContext} from "../../utils/AuthContext"


function Login() {
  const { logIn } = useContext(AuthContext)
  const [input, setInput] = useState({});
  const [redirect, setRedirect] = useState(false);
  

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogIn = async event => {
    event.preventDefault()

    const checkUser = {
      username: input.username,
      email: input.email,
      password: input.password
    }

 
    const data =  await  logIn(checkUser);
    console.log('TEEEST', data)
    if(data.status === 200){
      setRedirect(true) 
    }else{
      alert('Please provide the right credentials')
    }
  
  } 

  if(redirect){
    return <Redirect to='/patients'/>
  }

  return (
    <form onSubmit={handleLogIn}>
      <Card title="Log In">
        <Input
          label="Username "
          name= "username"
          required
          value={input.username} 
          placeholder= "Enter your username"
          onChange= {handleChange}
          type = "text"
        />
        <Input
          label="Email "
          name= "email"
          required
          value={input.email} 
          placeholder= "Enter your email"
          onChange= {handleChange}
          type = "text"
        />
        <Input
          label="Password "
          name= "password"
          required
          value={input.password} 
          placeholder= "Enter your password"
          onChange= {handleChange}
          type = "password"
        />
        <Button type="submit" >Log in</Button>
      </Card>
    </form>

  );
}


export default Login;
