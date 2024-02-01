import React,{useState} from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import MyVerticallyCenteredModal from './UpdateTask';
import { useSelector } from "react-redux";

const TasksList = () => {
  const {taskList}=useSelector((state) =>state.tasks)
  const updateTask = () => {
    console.log("update Task");
    setModalShow(true)
  };

  const deleteTask = () => {
    console.log("delete task");
  };

  const [modalShow,setModalShow] = useState(false)
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Name</th>
            <th>Eamil</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            taskList && taskList.map((task,index)=>{
              return(
                <tr className="text-center" key={task.id}>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td>{task.email}</td>
                
                <td>{task.password}</td>
                <td>
                  <Button
                    variant="primary"
                    className="mx-3"
                    onClick={() => updateTask()}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Button>
                  <Button variant="primary">
                    <i className="bi bi-trash3" onClick={() => deleteTask()}></i>
                  </Button>
                </td>
              </tr>
              )
            })
          }
          
       
        </tbody>
      </Table>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TasksList;
