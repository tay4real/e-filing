import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { useDepts } from "../../../hooks/depts";
import Loader from "../../../components/Loader";
import { Row, Button, Card } from "react-bootstrap";
import { FaSearch, FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import AddDepartment from "../../../components/modal/AddDepartment";

export const Departments = (props) => {
  const [departments, loading, error] = useDepts();
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="navbar navbar-light bg-light py-0">
        <div className="container-fluid">
          <div>
            <NavLink to="/" className="navbar-brand">
              Departments
            </NavLink>
            <Button
              variant="outline-primary"
              onClick={() => setModalShow(true)}
            >
              {" "}
              + new department
            </Button>
          </div>

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

          <div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <NavLink to="/">Home</NavLink>
                </li>

                <li className="breadcrumb-item active" aria-current="page">
                  Departments
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <AddDepartment show={modalShow} onHide={() => setModalShow(false)} />

      <Row className="justify-content-center align-items-center pt-5 pb-3">
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
                <th>Department Name</th>
                <th>Department Hierachy</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <Loader />
              ) : (
                departments.map((dept, key) => (
                  <tr key={dept._id}>
                    <td>{key + 1}</td>
                    <td>{dept.dept_name}</td>
                    <td>Level {dept.dept_level}</td>

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

export default Departments;
