import React, { useState } from "react";
import "./styles.scss";
import { Row, Col, Button, Card, Form } from "react-bootstrap";
import fetchBackend from "../../../../clients/backend";
import { DangerAlert } from "../../../../components";
import ActionButton from "../../../../components/action_button";
import { NavLink } from "react-router-dom";

const NewUser = ({ user }) => {
  const [newUser, setNewUser] = useState({
    firstname: "",
    surname: "",
    username: "",
    password: "",
    email: "",
    role: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      console.log(newUser);
      const { data } = await fetchBackend.post("/auth/register", newUser);

      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      setLoading(false);
      setNewUser({
        firstname: "",
        surname: "",
        username: "",
        password: "",
        email: "",
        role: "",
      });
      setSuccess("User registration successful");
    } catch (error) {
      setLoading(false);
      if (error.response.status === 401) {
        setError("Registration Failed.");
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <>
      <Row className="px-3 pr-5 top-nav py-1 text-white border-bottom border-muted justify-content-between">
        <h2 className="top-header">New User</h2>
        <ActionButton
          variant="outline-success"
          classname="btn-action"
          button_label="+ add new user"
        />{" "}
      </Row>
      <Row className="main-pane d-flex justify-content-center align-items-center">
        <Card className="p-4">
          <Form method="POST" onSubmit={handleSubmit}>
            <Row>
              <Col>
                {" "}
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    First name <span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    name="firstname"
                    value={newUser.firstname}
                    onChange={handleChange}
                    type="text"
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                {" "}
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    Surname <span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    name="surname"
                    value={newUser.surname}
                    onChange={handleChange}
                    type="text"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                {" "}
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    Username <span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    name="username"
                    value={newUser.username}
                    onChange={handleChange}
                    type="text"
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                {" "}
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    Password <span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    name="password"
                    value={newUser.password}
                    onChange={handleChange}
                    type="password"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                {" "}
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    Email<span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    name="email"
                    value={newUser.email}
                    onChange={handleChange}
                    type="email"
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                {" "}
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Select User Role</Form.Label>
                  <Form.Control
                    as="select"
                    name="role"
                    value={newUser.role}
                    onChange={handleChange}
                    type="email"
                    defaultValue="-"
                    required
                  >
                    <option>-</option>
                    <option>Admin</option>
                    <option>Clerical</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Row>
    </>
  );
};

export default NewUser;
