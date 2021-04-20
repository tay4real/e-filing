import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateDepartment,
  deleteDepartment,
} from "../../../redux/actions/departments";
import DepartmentDataService from "../../../services/DepartmentService";
import { Spinner, Form, Col } from "react-bootstrap";

class Department extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.getDepartment = this.getDepartment.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.removeDepartment = this.removeDepartment.bind(this);

    this.state = {
      currentDepartment: {
        _id: null,
        dept_name: "",
        status: 0,
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getDepartment(this.props.match.params.id);
  }

  onChangeName(e) {
    const dept_name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentDepartment: {
          ...prevState.currentDepartment,
          dept_name: dept_name,
        },
      };
    });
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
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Department</Form.Label>
                  <Form.Control
                    type="name"
                    name="dept_name"
                    value={currentDepartment.dept_name}
                    placeholder="Enter Department name"
                    onChange={this.onChangeName}
                  />
                </Form.Group>
              </Form.Row>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentDepartment.status === 0 ? "Active" : "Inactive"}
              </div>
            </Form>

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
