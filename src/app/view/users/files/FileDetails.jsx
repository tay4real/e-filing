import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export const FileDetails = (props) => {
  return <div>File Details Page</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FileDetails);
