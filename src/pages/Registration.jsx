import React, { useState } from 'react';
import styled from 'styled-components';
import bgImage from '../Image/loginBG.jpg';
import { useNavigate, Link } from 'react-router-dom';

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
  height: 80vh;
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
  margin-bottom: 0.5rem; /* Adjusted margin-bottom value */
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

const CertificationInput = styled(Input)`
  margin-bottom: 2rem;
`;

const LoginLink = styled(Link)`
  font-size: 1.2rem;
  margin-top: 0.5rem; /* Adjusted margin-top value */
  padding: 0.3rem 0; /* Adjusted padding value */
  color: #198754;
  text-decoration: none;
`;

const Registration = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [certifications, setCertifications] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Redirect to profile page with registration details as state
    navigate('/profile', {
      state: {
        username,
        password,
        birthdate,
        certifications,
      },
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Registration</Title>
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
        <Input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Label htmlFor="birthdate">Birthdate</Label>
        <Input
          type="date"
          id="birthdate"
          name="birthdate"
          required
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <Label htmlFor="certifications">Certifications</Label>
        <CertificationInput
          type="text"
          id="certifications"
          name="certifications"
          value={certifications}
          onChange={(e) => setCertifications(e.target.value)}
        />
        <Button type="submit">Submit</Button>
        <Label>Already have an account?</Label>
        <LoginLink to="/">Log in</LoginLink>
      </Form>
    </Container>
  );
};

export default Registration;
