import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button, Form, Col } from "react-bootstrap";
import { addNewDept } from "../../redux/actions/deptActions";

export const AddDepartment = (props) => {
  const [newDepartment, setNewDepartment] = useState({
    dept_name: "",
    dept_level: "",
    status: 0,
  });

  // const { error, success } = useSelector((state) => state.depts);
  console.log(newDepartment);
  const { departments, loading, error, success } = useSelector(
    (state) => state.depts
  );
  console.log(departments, loading, error, success);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewDepartment({ ...newDepartment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newDepartment.dept_name !== "" && newDepartment.dept_level !== "") {
      dispatch(addNewDept(newDepartment));
      props.onHide();
    } else {
      props.onHide();
    }

    setNewDepartment({
      dept_name: "",
      dept_level: "",
    });
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New Department
        </Modal.Title>
      </Modal.Header>
      <Form method="POST" onSubmit={handleSubmit}>
        <Modal.Body className="px-5">
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="name"
                name="dept_name"
                value={newDepartment.dept_name}
                placeholder="Enter Department name"
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Hierachy Level</Form.Label>
              <Form.Control
                as="select"
                name="dept_level"
                defaultValue="Choose..."
                onChange={handleChange}
              >
                <option>Choose...</option>
                <option value="1"> Level 1</option>
                <option value="2"> Level 2</option>
                <option value="3">Level 3</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="switch"
              id="custom-switch"
              value={newDepartment.status}
              label="Activate Department"
              onChange={handleChange}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="danger" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddDepartment;
