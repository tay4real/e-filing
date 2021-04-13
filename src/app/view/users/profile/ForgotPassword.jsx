import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export const ForgotPassword = (props) => {
  return <div>Forgot Password</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
