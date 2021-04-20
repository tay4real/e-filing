import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import DepartmentDataService from "../../../services/DepartmentService";
import { Form } from "react-bootstrap";

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
    this.onChangeQueryString = this.onChangeQueryString.bind(this);
    this.retrieveDepartments = this.retrieveDepartments.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveDepartment = this.setActiveDepartment.bind(this);
    this.findByName = this.findByName.bind(this);
    this.removeAllDepartments = this.removeAllDepartments.bind(this);
    this.retrieveDepartments = this.retrieveDepartments.bind(this);

    this.state = {
      departments: [],
      currentDepartment: null,
      currentIndex: -1,
      searchDepartmentName: "",
      queryString: "",
      page: 5,
    };

    this.pageSizes = [5, 10, 15];
  }

  componentDidMount() {
    this.retrieveDepartments();
  }

  onChangeSearchDepartmentName(e) {
    const searchDepartmentName = "limit=" + e.target.value;

    this.setState({
      searchDepartmentName: searchDepartmentName,
    });
    console.log(this.state.searchDepartmentName);
  }

  onChangeQueryString(e) {
    const queryString = "limit=" + e.target.value;

    this.setState({
      queryString: queryString,
      page: e.target.value,
    });
    console.log(this.state.queryString, this.state.queryString);
  }

  retrieveDepartments() {
    const url = "/depts?" + this.state.queryString;

    DepartmentDataService.getAll(url)
      .then((response) => {
        const departments = response.data;

        this.setState({
          departments: departments,
        });
      })
      .catch((e) => {
        console.log(e);
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
      pageSize,
    } = this.state;
    const departments = this.state.departments.depts;

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
                  onClick={this.setPageSize}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h4>Department List</h4>

            <div className="mt-3">
              {"Items per Page: "}
              <select
                className="form-select form-select-lg px-2 py-1"
                onChange={this.onChangeQueryString}
                value={pageSize}
              >
                <option>5</option>
                <option>10</option>
                <option>15</option>
              </select>
            </div>

            <Form.Control
              as="select"
              onChange={this.onChangeSearchDepartmentName}
              custom
            >
              <option>10</option>
              <option>15</option>
              <option>20</option>
            </Form.Control>

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
