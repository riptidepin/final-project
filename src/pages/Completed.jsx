import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CompletedPage = ({ selectedCourse }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleApplyJob = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {selectedCourse && (
        <Card className="custom-card" style={{ marginTop: '50px' }}>
          <Card.Img variant="top" src={selectedCourse.image} />
          <Card.Body>
            <Card.Title>{selectedCourse.title}</Card.Title>
            <Card.Text>{selectedCourse.description}</Card.Text>
            <Card.Text>{selectedCourse.skills}</Card.Text>
            <Card.Text>{selectedCourse.length}</Card.Text>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                variant="primary"
                style={{ backgroundColor: '#198754' }}
                onClick={handleApplyJob}
              >
                Apply Job
              </Button>
            </div>
          </Card.Body>
        </Card>
      )}

      <Modal show={showPopup} onHide={handleClosePopup} centered>
        <Modal.Header closeButton>
          <Modal.Title>Job Application</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your job application is pending. Please wait for further processing.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            style={{ backgroundColor: '#198754' }}
            onClick={handleClosePopup}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CompletedPage;
