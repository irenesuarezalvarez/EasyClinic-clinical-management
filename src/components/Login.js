import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";

import { AuthContext } from "../utils/AuthContext";
import Box from "./layouts/Box";
import Button from "./layouts/Button.js";
import Card from "./layouts/Card";
import Input from "./forms/Input.js";


const Login = () => {
  const { logIn, role } = useContext(AuthContext);
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

    try{
    
      const data = await logIn(checkUser);
      if(data.status === 200){
        setRedirect(true)       
      }else{
        alert('Please provide the right credentials');
      }
    }
    catch(error){
      console.log(error);
    }
  } 
  
  if(redirect && role === "prof"){
    return <Redirect to='/mypatients'/>

  }  else if(redirect && role === "admin"){
    return <Redirect to='/patients'/>
  }  

  return (
    <form onSubmit={handleLogIn}>
      <Card title="Log In">
        <Input
          label="Username "
          name="username"
          required
          value={input.username} 
          placeholder="Enter your username"
          onChange={handleChange}
          type="text"
        />
        <Input
          label="Email "
          name="email"
          required
          value={input.email} 
          placeholder="Enter your email"
          onChange={handleChange}
          type="text"
        />
        <Input
          label="Password "
          name="password"
          required
          value={input.password} 
          placeholder="Enter your password"
          onChange={handleChange}
          type="password"
        />
        <Box padding="1rem">
          <Button type="submit">Log in</Button>
        </Box>
        
      </Card>
    </form>
  );
}

export default Login;
