import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import VAimage from '../Image/VA.jpg';
import Freelanceimage from '../Image/freelance.jpg';
import Graphicimage from '../Image/graphicD.jpg';
import Tutorimage from '../Image/tutor.jpg';
import SocialMediaimage from '../Image/socialMedia.jpg';
import Bookkeeperimage from '../Image/bookkeeper.jpg';

const HomePage = () => {
  const cardsData = [
    {
        title: 'Virtual Assistant',
        image: VAimage,
        description: 'Job Description: Provide administrative support remotely, including managing schedules, organizing emails, handling travel arrangements, and conducting research.',
        skills: 'Skills Needed: Excellent organizational and time management skills, strong communication abilities, proficiency in using productivity tools and software, attention to detail, and ability to multitask',
    },
    {
        title: 'Freelance Writer',
        image: Freelanceimage,
        description: 'Job Description: Create written content for various platforms, such as articles, blog posts, website copy, or marketing materials',
        skills: 'Skills Needed: Strong writing skills, ability to conduct research, creativity, attention to detail, self-discipline, and familiarity with digital content creation tools',
    },
    {
        title: 'Graphic Designer',
        image: Graphicimage,
        description: 'Job Description: Create visual concepts, design layouts, and produce digital or print materials for clients',
        skills: 'Skills Needed: Proficiency in graphic design software (e.g., Adobe Creative Suite), creativity, attention to detail, knowledge of design principles, ability to meet deadlines, and good communication skills',
    },
    {
        title: 'Online Tutor',
        image: Tutorimage,
        description: 'Job Description: Provide academic support and guidance to students through online platforms in various subjects',
        skills: 'Skills Needed: Proficiency in specific subjects, strong communication skills, patience, ability to explain complex concepts, adaptability to different learning styles, and knowledge of online tutoring platforms',
    },
    {
        title: 'Social Media Manager',
        image: SocialMediaimage,
        description: 'Job Description: Develop and implement social media strategies, create engaging content, manage social media accounts, monitor analytics, and interact with followers',
        skills: 'Skills Needed: Strong understanding of social media platforms, creativity, excellent written and verbal communication skills, knowledge of social media management tools, ability to analyze data, and staying updated on industry trends',
    },
    {
        title: 'Bookkeeper',
        image: Bookkeeperimage,
        description: 'Job Description: Maintain financial records, reconcile accounts, prepare financial statements, manage invoices, and handle basic accounting tasks',
        skills: 'Skills Needed: Proficiency in bookkeeping software (e.g., QuickBooks), attention to detail, accuracy in data entry, knowledge of accounting principles, and organizational skills',
    },
  ];

  return (
    <Container>
      <Row>
        {cardsData.map((card, index) => (
          <Col key={index} md={4} sm={6} xs={12}>
            <Card className="custom-card" style={{marginTop: '50px'}}>
              <Card.Img variant="top" src={card.image} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
                <Card.Text>{card.skills}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
