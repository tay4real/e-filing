import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export const OutgoingMails = (props) => {
  return <div>Outgoing Mail Page</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OutgoingMails);
