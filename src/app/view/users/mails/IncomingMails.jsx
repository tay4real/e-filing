import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export const IncomingMails = (props) => {
  return <div>All Incoming Mails Page</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(IncomingMails);
