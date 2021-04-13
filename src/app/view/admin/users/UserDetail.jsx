import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export const UserDetail = (props) => {
  return (
    <>
      <div className="navbar navbar-light bg-light py-0">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            User Profile
          </NavLink>
          <div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <NavLink to="/admin/departments">Users</NavLink>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {} Profile
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

UserDetail.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
