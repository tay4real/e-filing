import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export const NewDocument = (props) => {
  return (
    <>
      <div className="navbar navbar-light bg-light py-0">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            New Document
          </NavLink>
          <div>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li class="breadcrumb-item">
                  <NavLink to="/">Documents</NavLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  New Document
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

export default connect(mapStateToProps, mapDispatchToProps)(NewDocument);
