import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, FormControl, Button, Col } from 'react-bootstrap';

const LoginForm = ({setuser,setisRegistered,setisLoggedIn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const hansdleAsync=async(payload)=>{
    try{
  const response=await axios.post("http://localhost:5000/login",payload,{
    headers: {
      "Content-Type": "application/json"
    }
  })
  const information=await response.data;
    if(response.status===200){
      console.log(`${information.userName} successfully logged in`)
      setisLoggedIn((prev)=>!prev)
      setuser({
        username:information.userName,
        userEmail:information.email
      })
    }
    }catch(error){
      console.log(error)
    }
}
const loadRegister=()=>{
    setisRegistered((prev)=>!prev)
}
  const handleLogin = (event) => {
    event.preventDefault();
    if (password && email) {
      const data={
        email:email,
        password:password
      }
      setEmail("");
      setPassword("");
      hansdleAsync(data);
    } else {
      alert("Fill all the fields")
    }
  };

  return (
    <Form className='login' horizontal onSubmit={handleLogin}>
        <h2>Login Form</h2>
      <FormGroup controlId="formHorizontalUsername">
        <Col sm={2}>
          Email
        </Col>
        <Col sm={10}>
          <FormControl
            type="email"
            placeholder="email@gmail.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalPassword">
        <Col sm={2}>
          Password
        </Col>
        <Col sm={10}>
          <FormControl
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col>
          <Button type="submit">Sign in</Button>
        </Col>
      </FormGroup>
      <FormGroup className='create-account'>
        <Col >
          <Button onClick={loadRegister}>Create New Account</Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default LoginForm;
