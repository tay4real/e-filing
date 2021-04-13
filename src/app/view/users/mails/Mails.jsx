import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export const Mails = (props) => {
  return (
    <>
      <div className="navbar navbar-light bg-light py-0 sticky-top">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            Mails List
          </NavLink>
          <div>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <NavLink to="/">Home</NavLink>
                </li>

                <li class="breadcrumb-item active" aria-current="page">
                  Mails List
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="navbar navbar-light bg-dark py-0 justify-content-between align-item-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="/">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="/">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="/">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="/">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Mails);
