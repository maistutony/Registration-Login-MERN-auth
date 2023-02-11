import { Form, FormGroup, FormControl, Button, Col } from 'react-bootstrap';
import axios from 'axios';
const RegistrationForm = ({setisRegistered,email,setEmail,password,setPassword,userName,setuserName}) => {
  const hansdleAsync=async(payload)=>{
      try{
    const response=await axios.post("http://localhost:5000/register",payload,{
      headers: {
        "Content-Type": "application/json"
      }
    })
    const information=await response.data;
      console.log(information)
      if(information.includes("registered successfully"))    setisRegistered((pre)=>!pre)
      }catch(error){
        console.log(error)
      }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password && userName && email) {
      const data={
        email:email,
        password:password,
        userName
      }
      setEmail("");
      setPassword("");
      setuserName("");
      hansdleAsync(data);
    } else {
      alert("Fill all the fields")
    }
  };

  return (
    <Form className='form' horizontal onSubmit={handleSubmit}>
        <h2>SignUp Form</h2>
      <FormGroup controlId="formHorizontalEmail">
        <Col sm={2}>
          Email
        </Col>
        <Col sm={10}>
          <FormControl
            type="email"
            placeholder="Email"
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

      <FormGroup controlId="formHorizontaluserName">
        <Col sm={2}>
          UserName
        </Col>
        <Col sm={10}>
          <FormControl
            type="text"
            placeholder="UserName"
            value={userName}
            onChange={(event) => setuserName(event.target.value)}
          />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col sm={10}>
          <Button type="submit">Sign up</Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default RegistrationForm;
