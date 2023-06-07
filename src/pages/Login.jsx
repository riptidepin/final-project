import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import bgImage from '../Image/loginBG.jpg';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-image: url(${bgImage});
  background-size: cover;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-bottom: 5vh;
  width: 70vh;
  height: 50vh;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #00bfa5; /* Green title color */
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  font-size: 1.2rem;
  padding: 0.5rem;
  margin-bottom: 2rem;
  border: none;
  border-bottom: 2px solid #555;
  outline: none;
  &:focus {
    border-color: #00bfa5; /* Green border color on focus */
  }
`;

const Button = styled.button`
  font-size: 1.2rem;
  padding: 0.5rem 2rem;
  background-color: #198754; /* Green button color */
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #00e676; /* Lighter green button color on hover */
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Redirect to profile page with username as state
    navigate('/profile', { state: { username } });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          name="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" name="password" required />
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default Login;

