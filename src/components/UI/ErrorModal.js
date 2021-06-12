import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from './Button';

const ErrorModal = (props) => {
  return (
    <Modal show onHide={props.onConfirm}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.message}</Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-secondary" onClick={props.onConfirm}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorModal;
