import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CoursePopup = ({ show, onHide, course, onFinishCourse }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Take this course</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Title: {course.title}</h5>
        <p>Description: {course.description}</p>
        <p>Skills to be learned: {course.skills}</p>
        <p>Length: {course.length}</p>
        <h6>Sample Lessons:</h6>
        <ul>
          {/* Render sample lessons here */}
          <li>Lesson 1</li>
          <li>Lesson 2</li>
          <li>Lesson 3</li>
        </ul>
        <h6>Sample Assessment:</h6>
        <p>Here are the sample assessment details.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" style={{ backgroundColor: "#198754" }} onClick={onFinishCourse}>
          Finish Course
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CoursePopup;
