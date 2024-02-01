import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form  from 'react-bootstrap/Form';

const MyVerticallyCenteredModal = (props) => {
    const [name,setTitle] = useState('')
    const [password,setDescription] = useState('')
    const [email,setEmail]=useState('')

    const updateTask = () => {
        props.onHide()
    }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={email}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={name}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="text-end">
            <Button variant="primary" type="submit" onClick={(e) => updateTask(e)}>
              Update Task
            </Button>
          </div>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
