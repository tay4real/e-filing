import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export const AddDepartment = (props) => {
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
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddDepartment);
