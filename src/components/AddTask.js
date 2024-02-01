import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addTaskToList } from "./slices/taskSlice";
import { UseDispatch, useDispatch } from "react-redux";
const AddTask = () => {

const dispatch=useDispatch()    

    const [name,setTitle] = useState('')
    const [password,setDescription] = useState('')
    const [email, setEmail]=useState('')


    const addTask = (e) => {
        e.preventDefault()
        console.log({name,password,email})
        dispatch(addTaskToList({name,email,password,}))
    }
  return (
    <section className="my-5">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" placeholder="Enter UserName" value={name}
         onChange={(e) => setTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" value={email}
         onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" value={password}
        onChange={(e) => setDescription(e.target.value)}/>
      </Form.Group>
      <div className="text-end">
        <Button variant="primary" type="submit" onClick={(e) =>addTask(e)}>
         Login
        </Button>
      </div>
    </Form>
    </section>
  );
};

export default AddTask;
