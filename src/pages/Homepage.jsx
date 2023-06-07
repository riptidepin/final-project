import React, { useState } from 'react';
import { Card, Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import VAimage from '../Image/VA.jpg';
import Freelanceimage from '../Image/freelance.jpg';
import Graphicimage from '../Image/graphicD.jpg';
import Tutorimage from '../Image/tutor.jpg';
import SocialMediaimage from '../Image/socialMedia.jpg';
import Bookkeeperimage from '../Image/bookkeeper.jpg';
import CoursePopup from './PopUp';
import CompletedPage from './Completed';

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showCompletedPage, setShowCompletedPage] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showAddedToFavorites, setShowAddedToFavorites] = useState(false);

  const coursesData = [
    {
      id: 1,
      title: 'Virtual Assistant',
      image: VAimage,
      description: 'Job Description: Managing schedules, organizing emails, handling travel arrangements, and conducting research.',
      skills: 'Skills Needed: Excellent organizational and time management skills, proficiency in using productivity tools and software, and ability to multitask',
      length: 'Estimated Length: 4 weeks',
    },
    {
      id: 2,
      title: 'Freelance Writer',
      image: Freelanceimage,
      description: 'Job Description: Create written content for various platforms, such as articles, blog posts, website copy, or marketing materials',
      skills: 'Skills Needed: Strong writing skills, ability to conduct research, creativity, attention to detail, self-discipline, and familiarity with digital content creation tools',
      length: 'Estimated Length: 6 weeks',
    },
    {
      id: 3,
      title: 'Graphic Designer',
      image: Graphicimage,
      description: 'Job Description: Create visual concepts, design layouts, and produce digital or print materials for clients',
      skills: 'Skills Needed: Proficiency in graphic design software (e.g., Adobe Creative Suite), creativity, ability to meet deadlines, and good communication skills',
      length: 'Estimated Length: 8 weeks',
    },
    {
      id: 4,
      title: 'Online Tutor',
      image: Tutorimage,
      description: 'Job Description: Provide academic support and guidance to students through online platforms in various subjects',
      skills: 'Skills Needed: Proficiency in specific subjects, strong communication skills, patience, ability to explain complex concepts, adaptability to different learning styles, and knowledge of online tutoring platforms',
      length: 'Estimated Length: 5 weeks',
    },
    {
      id: 5,
      title: 'Social Media Manager',
      image: SocialMediaimage,
      description: 'Job Description: Create engaging content, manage social media accounts, monitor analytics, and interact with followers',
      skills: 'Skills Needed: Strong understanding of social media, knowledge of social media management tools, ability to analyze data, and staying updated on industry trends',
      length: 'Estimated Length: 6 weeks',
    },
    {
      id: 6,
      title: 'Bookkeeper',
      image: Bookkeeperimage,
      description: 'Job Description: Maintain financial records, reconcile accounts, prepare financial statements, manage invoices, and handle basic accounting tasks',
      skills: 'Skills Needed: Proficiency in bookkeeping software (e.g., QuickBooks), attention to detail, accuracy in data entry, knowledge of accounting principles, and organizational skills',
      length: 'Estimated Length: 8 weeks',
    },
  ];

  const addToFavorites = (id) => {
    const course = coursesData.find((course) => course.id === id);
    if (course) {
      setFavorites([...favorites, course]);
      setShowAddedToFavorites(true);
    }
  };

  const handleTakeCourse = (course) => {
    setSelectedCourse(course);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedCourse(null);
  };

  const handleFinishCourse = () => {
    setShowPopup(false);
    setShowCompletedPage(true);
  };

  const handleAddedToFavoritesClose = () => {
    setShowAddedToFavorites(false);
  };

  return (
    <Container>
      {showAddedToFavorites && (
        <Modal show={showAddedToFavorites} onHide={handleAddedToFavoritesClose} centered>
          <Modal.Body style={{ textAlign: 'center', fontSize: '24px', padding: '20px' }}>
            <p>Added to favorites!</p>
            <Button variant="primary" style={{ backgroundColor: '#198754' }} onClick={handleAddedToFavoritesClose}>
              Okay
            </Button>
          </Modal.Body>
        </Modal>
      )}

      {showCompletedPage ? (
        <CompletedPage selectedCourse={selectedCourse} />
      ) : (
        <>
          <Row>
            {coursesData.map((course) => (
              <Col key={course.id} md={4} sm={6} xs={12}>
                <Card className="custom-card" style={{ marginTop: '50px' }}>
                  <Card.Img variant="top" src={course.image} />
                  <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>{course.description}</Card.Text>
                    <Card.Text>{course.skills}</Card.Text>
                    <Card.Text>{course.length}</Card.Text>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Button
                        variant="primary"
                        style={{ backgroundColor: '#198754' }}
                        onClick={() => handleTakeCourse(course)}
                      >
                        Take Course
                      </Button>
                      <div style={{ marginTop: '10px' }}>
                        <Link
                          to="#"
                          style={{ color: 'black', textDecoration: 'none' }}
                          onClick={() => addToFavorites(course.id)}
                        >
                          Add to Favorites
                        </Link>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          {selectedCourse && (
            <CoursePopup show={showPopup} onHide={handleClosePopup} course={selectedCourse} onFinishCourse={handleFinishCourse} />
          )}
        </>
      )}
    </Container>
  );
};


export default HomePage;