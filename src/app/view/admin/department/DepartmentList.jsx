import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Loader from "../../../components/Loader";
import { Row, Button, Card } from "react-bootstrap";
import { FaSearch, FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import {
  retrieveDepartments,
  findDepartmentsByName,
  deleteAllDepartments,
} from "../../../redux/actions/departments";

class DepartmentList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchDepartmentName = this.onChangeSearchDepartmentName.bind(
      this
    );
    this.refreshData = this.refreshData.bind(this);
    this.setActiveDepartment = this.setActiveDepartment.bind(this);
    this.findByName = this.findByName.bind(this);
    this.removeAllDepartments = this.removeAllDepartments.bind(this);

    this.state = {
      currentDepartment: null,
      currentIndex: -1,
      searchDepartmentName: "",
    };
  }

  componentDidMount() {
    this.props.retrieveDepartments();
  }

  onChangeSearchDepartmentName(e) {
    const searchDepartmentName = e.target.value;

    this.setState({
      searchDepartmentName: searchDepartmentName,
    });
  }

  refreshData() {
    this.setState({
      currentDepartment: null,
      currentIndex: -1,
    });
  }

  setActiveDepartment(department, index) {
    this.setState({
      currentDepartment: department,
      currentIndex: index,
    });
  }

  removeAllDepartments() {
    this.props
      .deleteAllDepartments()
      .then((response) => {
        console.log(response);
        this.refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  findByName() {
    this.refreshData();

    this.props.findDepartmentsByName(this.state.searchDepartmentName);
  }

  render() {
    const {
      searchDepartmentName,
      currentDepartment,
      currentIndex,
    } = this.state;
    const { departments } = this.props;
    return (
      <>
        <div className="list row">
          <div className="col-md-8">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by name"
                value={searchDepartmentName}
                onChange={this.onChangeSearchDepartmentName}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={this.findByName}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h4>Departmnent List</h4>

            <ul className="list-group">
              {departments &&
                departments.map((department, index) => (
                  <li
                    className={
                      "list-group-item " +
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.setActiveDepartment(department, index)}
                    key={index}
                  >
                    {department.dept_name}
                  </li>
                ))}
            </ul>

            <button
              className="m-3 btn btn-sm btn-danger"
              onClick={this.removeAllDepartments}
            >
              Remove All
            </button>
          </div>
          <div className="col-md-6">
            {currentDepartment ? (
              <div>
                <h4>Department</h4>
                <div>
                  <label>
                    <strong>Name:</strong>
                  </label>{" "}
                  {currentDepartment.dept_name}
                </div>
                <div>
                  <label>
                    <strong>Hierachy:</strong>
                  </label>{" "}
                  {currentDepartment.dept_level === "1" && "Level 1"}
                  {currentDepartment.dept_level === "2" && "Level 2"}
                  {currentDepartment.dept_level === "3" && "Level 3"}
                </div>
                <div>
                  <label>
                    <strong>Status:</strong>
                  </label>{" "}
                  {currentDepartment.status === 0 ? "Active" : "Inactive"}
                </div>

                <Link
                  to={"/admin/department/" + currentDepartment._id}
                  className="badge badge-warning"
                >
                  Edit
                </Link>
              </div>
            ) : (
              <div>
                <br />
                <p>Please click on a Department...</p>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    departments: state.depts,
  };
};

export default connect(mapStateToProps, {
  retrieveDepartments,
  findDepartmentsByName,
  deleteAllDepartments,
})(DepartmentList);
