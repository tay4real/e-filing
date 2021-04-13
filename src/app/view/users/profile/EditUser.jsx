import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export const EditUser = (props) => {
  return <div>Edit User Profile Page</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
