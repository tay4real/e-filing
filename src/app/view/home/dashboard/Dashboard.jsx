import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import { RiArrowDropRightLine } from "react-icons/ri";
import { FcDocument } from "react-icons/fc";
import { FaMailBulk } from "react-icons/fa";
import { VscFileSubmodule } from "react-icons/vsc";

export const Dashboard = (props) => {
  return (
    <>
      <div className="navbar navbar-light bg-light py-0">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand d-flex flex-column">
            Dashboard
          </NavLink>

          <div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="breadcrumb-item active " aria-current="page">
                  Dashboard
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <Row className="px-5 py-3" noGutters>
        <Col sm={12} md={4} lg={3} className="pb-3 pl-3">
          <Card className="bg-info text-light">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column">
                <span>Documents</span>
                <span style={{ fontSize: "1.5rem" }}>12</span>
              </div>
              <div>
                <FcDocument style={{ fontSize: "2rem" }} />
              </div>
            </Card.Header>
            <NavLink to="/" className="card-link">
              <Card.Body className="d-flex justify-content-between align-items-center p-0 m-0 px-3 text-light">
                <small>View Documents</small>
                <span style={{ fontSize: "2rem" }}>
                  <RiArrowDropRightLine />
                </span>
              </Card.Body>
            </NavLink>
          </Card>
        </Col>

        <Col sm={12} md={4} lg={3} className="pb-3 pl-3">
          <Card className="bg-info text-light">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column">
                <span>Incoming Mails Today</span>
                <span style={{ fontSize: "1.5rem" }}>12</span>
              </div>
              <div>
                <FaMailBulk style={{ fontSize: "2rem" }} />
              </div>
            </Card.Header>
            <NavLink to="/users/incoming/mails" className="card-link">
              <Card.Body className="d-flex justify-content-between align-items-center p-0 m-0 px-3 text-light">
                <small>View Incoming Mails</small>
                <span style={{ fontSize: "2rem" }}>
                  <RiArrowDropRightLine />
                </span>
              </Card.Body>
            </NavLink>
          </Card>
        </Col>

        <Col sm={12} md={4} lg={3} className="pb-3 pl-3">
          <Card className="bg-info text-light">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column">
                <span>Outgoing Mails Today</span>
                <span style={{ fontSize: "1.5rem" }}>12</span>
              </div>
              <div>
                <FaMailBulk style={{ fontSize: "2rem" }} />
              </div>
            </Card.Header>
            <NavLink to="/users/outgoing/mails" className="card-link">
              <Card.Body className="d-flex justify-content-between align-items-center p-0 m-0 px-3 text-light">
                <small>View Outgoing Mails</small>
                <span style={{ fontSize: "2rem" }}>
                  <RiArrowDropRightLine />
                </span>
              </Card.Body>
            </NavLink>
          </Card>
        </Col>

        <Col sm={12} md={4} lg={3} className="pb-3 pl-3">
          <Card className="bg-info text-light">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column">
                <span>Files</span>
                <span style={{ fontSize: "1.5rem" }}>12</span>
              </div>
              <div>
                <VscFileSubmodule style={{ fontSize: "2rem" }} />
              </div>
            </Card.Header>
            <NavLink to="/users/files" className="card-link">
              <Card.Body className="d-flex justify-content-between align-items-center p-0 m-0 px-3 text-light">
                <small>View Files</small>
                <span style={{ fontSize: "2rem" }}>
                  <RiArrowDropRightLine />
                </span>
              </Card.Body>
            </NavLink>
          </Card>
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
