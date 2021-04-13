import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export const MailDetails = (props) => {
  return <div>Mail Detail Page</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MailDetails);
