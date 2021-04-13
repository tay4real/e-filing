import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

import { fetchBackend } from "../../services";
import { DangerAlert } from "../../components";

const logo = "/images/e-filing-logo.png";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetchBackend.post("/auth/login", credentials);
      console.log(res);
      setLoading(false);
      if (res.statusText === "OK") {
        <Redirect to="/" />;
      }
    } catch (error) {
      setLoading(false);
      if (error.response.status === 401) {
        setError("Username or password is incorrect");
      } else {
        setError(error.message);
      }
      setError(error.message);
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center w-100 vh-100 bg-light">
        <Form onSubmit={handleSubmit} className="form-signin">
          <div className="signin-logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="signin-contents">
            <h2 className="form-signin-heading">PLEASE SIGN IN</h2>
            {error && <DangerAlert messsage={error} />}
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                name="email"
                value={credentials.email}
                onChange={handleChange}
                type="email"
                required
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                name="password"
                value={credentials.password}
                onChange={handleChange}
                type="password"
                required
                placeholder="Password"
              />
            </Form.Group>

            <Button
              className="btn btn-lg btn-primary btn-block"
              style={{ backgroundColor: "#00BD9C" }}
              type="submit"
            >
              {loading && <Spinner animation="border" />} Login
            </Button>
            <hr />
            <div className="text-center">
              <Link className="small" to="/users/forgot-password">
                Forgot Password?
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Login;
