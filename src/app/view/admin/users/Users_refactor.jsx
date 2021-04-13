import React, { useState, useEffect, useCallback } from "react";
import "./styles.scss";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import fetchBackend from "../../../../clients/backend";
import { DangerAlert } from "../../../../components";
import ActionButton from "../../../../components/action_button";
import { useHistory } from "react-router-dom";
import Loader from "../../../../components/Loader";
import { NavLink } from "react-router-dom";

const Users = ({ user }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const history = useHistory();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = useCallback(async () => {
    try {
      const { data } = await fetchBackend.get("/users");
      console.log(data);
      setUsers(data);
      setLoading(false);
    } catch (e) {
      if (
        e.response.status === 400 ||
        e.response.status === 401 ||
        e.response.status === 403
      ) {
        history.push("/auth/login");
        setLoading(false);
      }
    }
  }, [setUsers, setLoading, history]);

  // const handleEdit = async (e) => {
  //   setLoading(true);
  //   e.preventDefault();
  //   try {
  //     console.log(newUser);
  //     const { data } = await fetchBackend.post("/auth/register", newUser);

  //     localStorage.setItem("accessToken", data.accessToken);
  //     localStorage.setItem("refreshToken", data.refreshToken);
  //     setLoading(false);
  //     setNewUser({
  //       firstname: "",
  //       surname: "",
  //       username: "",
  //       password: "",
  //       email: "",
  //       role: "",
  //     });
  //     setSuccess("User registration successful");
  //   } catch (error) {
  //     setLoading(false);
  //     if (error.response.status === 401) {
  //       setError("Registration Failed.");
  //     } else {
  //       setError(error.message);
  //     }
  //   }
  // };

  return (
    <>
      <Row className="px-3 pr-5 top-nav py-1 text-white border-bottom border-muted justify-content-between">
        <h2 className="top-header">All Users</h2>

        <ActionButton
          variant="outline-success"
          classname="btn-action"
          button_label="+ add new user"
        />
      </Row>

      <Row className="main-pane d-flex justify-content-center align-items-center">
        <Card className="p-4 table-responsive">
          <table className="table table-striped">
            <thead>
              <tr
                style={{
                  backgroundColor: "#D2DAE3",
                  fontWeight: "lighter",
                  padding: "30px",
                }}
              >
                <th>#</th>
                <th>Full Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <Loader />
              ) : (
                users.map((user) => (
                  <tr key={user._id}>
                    <td>
                      <img
                        src={user.avatar}
                        width="32"
                        height="32"
                        className="rounded-circle my-n1"
                        alt="Avatar"
                      />
                    </td>
                    <td>
                      {user.surname} {user.firstname}
                    </td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      {" "}
                      <span className="badge bg-success">Active</span>
                    </td>
                    <td>
                      <ActionButton
                        classname="mr-1 bg-secondary"
                        button_label="Edit"
                        id={""}
                      />
                      <ActionButton
                        classname="mr-1"
                        button_label="Change Status"
                        id={""}
                      />
                      <ActionButton
                        classname="mr-1 bg-danger "
                        button_label="Delete"
                        id={""}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </Card>
      </Row>
    </>
  );
};

export default Users;
