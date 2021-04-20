import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import DepartmentDataService from "../../../services/DepartmentService";

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
    this.retrieveDepartments = this.retrieveDepartments.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveDepartment = this.setActiveDepartment.bind(this);
    this.findByName = this.findByName.bind(this);
    this.removeAllDepartments = this.removeAllDepartments.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePageSizeChange = this.handlePageSizeChange.bind(this);

    this.state = {
      departments: [],
      currentDepartment: null,
      currentIndex: -1,
      searchDepartmentName: "",

      page: 1,
      count: 0,
      pageSize: 3,
    };

    this.pageSizes = [3, 6, 9];
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

  getRequestParams(searchName, page, pageSize) {
    let params = {};

    if (searchName) {
      params["dept_name"] = searchName;
    }

    if (page) {
      params["page"] = page - 1;
    }

    if (pageSize) {
      params["size"] = pageSize;
    }

    return params;
  }

  retrieveDepartments() {
    const { searchName, page, pageSize } = this.state;
    const params = this.getRequestParams(searchName, page, pageSize);

    DepartmentDataService.getAll(params)
      .then((response) => {
        const { departments, totalPages } = response.data;

        this.setState({
          departments: departments,
          count: totalPages,
        });
        console.log(response.data);
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

  handlePageChange(event, value) {
    this.setState(
      {
        page: value,
      },
      () => {
        this.retrieveDepartments();
      }
    );
  }

  handlePageSizeChange(event) {
    this.setState(
      {
        pageSize: event.target.value,
        page: 1,
      },
      () => {
        this.retrieveDepartments();
      }
    );
  }

  render() {
    const {
      searchDepartmentName,
      departments,
      currentDepartment,
      currentIndex,
      page,
      count,
      pageSize,
    } = this.state;
    //const { departments } = this.props;
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

            <div className="mt-3">
              {"Items per Page: "}
              <select onChange={this.handlePageSizeChange} value={pageSize}>
                {this.pageSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>

              <Pagination
                className="my-3"
                count={count}
                page={page}
                siblingCount={1}
                boundaryCount={1}
                variant="outlined"
                shape="rounded"
                onChange={this.handlePageChange}
              />
            </div>

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
