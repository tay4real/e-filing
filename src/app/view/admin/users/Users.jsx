import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import useAllUsers from "../../../hooks/allusers";
import Loader from "../../../components/Loader";
import { Row, Button, Card } from "react-bootstrap";
import { FaSearch, FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const Users = (props) => {
  const [allUsers, loading, error] = useAllUsers();
  console.log(allUsers, loading);
  return (
    <>
      <div className="navbar navbar-light bg-light py-0">
        <div className="container-fluid m-0 p-0">
          <div>
            <NavLink to="/" className="navbar-brand">
              Users
            </NavLink>
            <Button variant="outline-primary"> + new user</Button>
          </div>

          <div>
            <Row className="border-bottom border-muted justify-content-between">
              <form className="d-flex">
                <input
                  className="form-control "
                  type="search"
                  placeholder="Search Users"
                  aria-label="Search"
                />

                <button className="btn btn-outline-secondary" type="submit">
                  <FaSearch className="search-icon" />
                </button>
              </form>
            </Row>
          </div>
          <div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <NavLink to="/">Home</NavLink>
                </li>

                <li className="breadcrumb-item active" aria-current="page">
                  Users
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <Row className="justify-content-center align-items-center  pt-5 pb-3">
        <Card className="table-responsive" style={{ width: "80%" }}>
          <table className="table table-striped">
            <thead>
              <tr
                style={{
                  backgroundColor: "#D2DAE3",
                  fontWeight: "lighter",
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
                allUsers.users.map((user) => (
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
                      <Button variant="info" classname="mr-1" title="Edit User">
                        {" "}
                        <FaUserEdit />
                      </Button>
                      <Button
                        variant="danger"
                        classname="mr-1"
                        title="Delete User"
                      >
                        {" "}
                        <MdDelete />
                      </Button>
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
