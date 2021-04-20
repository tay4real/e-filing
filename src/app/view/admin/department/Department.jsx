import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateDepartment,
  deleteDepartment,
} from "../../../redux/actions/departments";
import DepartmentDataService from "../../../services/DepartmentService";

class Department extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLevel = this.onChangeLevel.bind(this);
    this.getDepartment = this.getDepartment.bind(this);

    this.updateContent = this.updateContent.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.removeDepartment = this.removeDepartment.bind(this);

    this.state = {
      currentDepartment: {
        _id: null,
        dept_name: "",
        dept_level: "",
        status: 0,
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getDepartment(this.props.match.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          dept_name: name,
        },
      };
    });
  }

  onChangeLevel(e) {
    const level = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentDepartment,
        dept_level: level,
      },
    }));
  }

  getDepartment(id) {
    DepartmentDataService.get(id)
      .then((response) => {
        this.setState({
          currentDepartment: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateStatus(status) {
    let data = {
      _id: this.state.currentDepartment._id,
      dept_name: this.state.currentDepartment.dept_name,
      dept_level: this.state.currentDepartment.dept_level,
      status: status,
    };

    this.props
      .updateDepartment(this.state.currentDepartment._id, data)
      .then((reponse) => {
        console.log(reponse);

        this.setState((prevState) => ({
          currentDepartment: {
            ...prevState.currentDepartment,
            status: status,
          },
        }));

        this.setState({ message: "The status was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateContent() {
    this.props
      .updateDepartment(
        this.state.currentDepartment._id,
        this.state.currentDepartment
      )
      .then((reponse) => {
        console.log(reponse);

        this.setState({
          message: "The department was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  removeDepartment() {
    this.props
      .deleteDepartment(this.state.currentDepartment._id)
      .then(() => {
        this.props.history.push("/admin/departments");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentDepartment } = this.state;

    return (
      <div>
        {currentDepartment ? (
          <div className="edit-form">
            <h4>Department</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="dept_name"
                  value={currentDepartment.dept_name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Department Hierachy</label>
                <input
                  type="text"
                  className="form-control"
                  id="dept_level"
                  value={currentDepartment.dept_level}
                  onChange={this.onChangeLevel}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentDepartment.status === 0 ? "Active" : "Inactive"}
              </div>
            </form>

            {currentDepartment.status === 0 ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateStatus(1)}
              >
                Deactivate
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateStatus(0)}
              >
                Activate
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.removeDepartment}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateContent}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateDepartment, deleteDepartment })(
  Department
);
