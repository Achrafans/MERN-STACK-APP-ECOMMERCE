import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { addUser } from "../redux/apiCalls";
import { useDispatch } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color:#080808;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const dispatch=useDispatch();
  const [inputs, setInputs] = useState({
    username:'',
    email:'',
    password:'',
  });

  const handleChange= (e)=>{
    setInputs((prev)=>{
      return {...prev, [e.target.name]: e.target.value}
     
    })};
  console.log(inputs);

  const handleClick=(e)=>{
    e.preventDefault();
    const user = { ...inputs };
    addUser(user, dispatch);
    if(addUser){
      alert("New User Add successfully");
    }
    
  };

  

  return (
    <Container>
      <Wrapper>
        <Title><b>CREATE AN ACCOUNT</b></Title>
        <Form>
          <Input name="username" placeholder="username" onChange={handleChange} />
          <Input name="email" placeholder="email" onChange={handleChange} />
          <Input name="password" placeholder="password" onChange={handleChange} />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
