import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import dpImage from '../Image/dp.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const SubHeading = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0.3rem;
  color: #777;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #555;
`;

const LogoutButton = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: #198754;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00e676;
  }
`;

const ProfilePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const username = location?.state?.username || '';

  const handleLogout = () => {
    // Perform logout logic here
    // For simplicity, let's assume it's just clearing the session or token

    // Redirect to login page after logout
    navigate('/');
  };

  return (
    <Container>
      <ProfileImage src={dpImage} />
      <ProfileInfo>
        <Heading>{username}</Heading>
        <SubHeading>Location: New York, USA</SubHeading>
        <SubHeading>Educational Attainment: Bachelor's Degree</SubHeading>
        <SubHeading>Certification: Certified Professional</SubHeading>
        <Description>
          Courses: React, JavaScript, HTML/CSS, UI/UX Design
        </Description>
      </ProfileInfo>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </Container>
  );
};

export default ProfilePage;
