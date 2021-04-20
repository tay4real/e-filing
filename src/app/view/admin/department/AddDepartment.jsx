import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createDepartment } from "../../../redux/actions/departments";

import { Spinner, Form, Col } from "react-bootstrap";

export const AddDepartment = (props) => {
  const initialDepartmentState = {
    id: null,
    dept_name: "",
    status: 0,
  };
  const [department, setDepartment] = useState(initialDepartmentState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDepartment({ ...department, [name]: value });
  };

  const saveDepartment = () => {
    setLoading(true);
    const { dept_name } = department;

    console.log({ dept_name });
    dispatch(createDepartment({ dept_name }))
      .then((data) => {
        setDepartment({
          id: data._id,
          dept_name: data.dept_name,
          status: data.status,
        });
        setSubmitted(true);

        setLoading(false);
        console.log(data);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };

  const newDepartment = () => {
    setDepartment(initialDepartmentState);
    setSubmitted(false);
  };

  return (
    <>
      <div className="navbar navbar-light bg-light py-0">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            New Department
          </NavLink>
          <div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <NavLink to="/admin/departments">Departments</NavLink>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  New Department
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newDepartment}>
              Add
            </button>
          </div>
        ) : (
          <div class="col-md-6">
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Department</Form.Label>
                <Form.Control
                  type="name"
                  name="dept_name"
                  value={newDepartment.dept_name}
                  placeholder="Enter Department name"
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form.Row>

            <button onClick={saveDepartment} className="btn btn-success">
              {loading && <Spinner animation="border" />} Add Department
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default AddDepartment;
