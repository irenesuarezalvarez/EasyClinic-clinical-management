import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";


import Input from "./../../components/forms/Input.js"
import Container from "./../../components/layouts/Container";
import Card from "../../components/layouts/Card";
import Button from "../../components/layouts/Button.js";
import axiosApi from "../../utils/AxiosApi";

function Login() {
  const [input, setInput] = useState({});
  const [redirect, setRedirect] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = async event => {
    event.preventDefault()
    const newUser = {
      username: input.username,
      email: input.email,
      password: input.password
    }
     try {
      const result = await axiosApi.post('/auth/login', newUser)
      const data = await result;
      setRedirect(true)
      
    } catch (err) {
      console.error(err)
    } 
  } 

  if(redirect){
    return <Redirect to='/patients'/>
  }

  return (
    
    <Container horizontalPadding="1.5rem">
      <form onSubmit={handleClick}>
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
      <div>
        <span>I don't have an account</span>
        <Link to="/signup">Sign up</Link>
      </div>

    </Container>
  );
}

export default Login;
