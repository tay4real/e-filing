import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export const NewFile = (props) => {
  return <div>New File Page</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NewFile);
