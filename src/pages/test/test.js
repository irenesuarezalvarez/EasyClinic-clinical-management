import React, { useState } from "react";

import Input from "./../../components/forms/Input";
import Select from "./../../components/forms/Select";
import Container from "./../../components/layouts/Container";
import Card from "./../../components/layouts/Card";


function Signup() {
  const [input, setInput] = useState({});

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
      id: input.id,
      role: input.role,
      password: input.password
    } 
 /*    try {
      await axios.post('http://localhost:8888/test', newUser)
      setRedirect(true)
      console.log('WORKIIIIIING', redirect)
    } catch (err) {
      console.error(err)
    } */
  } 


  return (
    
    <Container horizontalPadding="1.5rem">
      <form>
        <Card title="Sign Up">
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
            label="Id "
            name= "id"
            required
            value={input.id} 
            placeholder= "Enter your id"
            onChange= {handleChange}
            type = "text"
          />
          <Select
            label="Role position "
            name= "role"
            required
            value={input.role} 
            placeholder= "Enter your role position"
            onChange= {handleChange}
            type = "text"
          >
              <option value="admin">Administrative</option>
              <option value="prof">Professional</option>
          </Select>
          

          <Input
            label="Password "
            name= "password"
            required
            value={input.password} 
            placeholder= "Enter your password"
            onChange= {handleChange}
            type = "text"
          />
          <button onClick= {handleClick}>Create account</button>
        </Card>
      </form>
    </Container>
  );
}

export default Signup;
