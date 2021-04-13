import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import { Form } from "react-bootstrap";
import { Link } from "@material-ui/core";

export const Files = (props) => {
  const columns = [
    {
      dataField: "id",
      text: "Product ID",
      hidden: true,
    },
    {
      dataField: "name",
      dataFormat: "<div> <a href='/admin/users'>cell </a></div>",
      text: "Product Name",
      hidden: true,
    },
    {
      dataField: "price",
      text: "Product Price",
      hidden: true,
    },
    {
      dataField: "field1",
      text: "Field 1",
    },
    {
      dataField: "field2",
      text: "Field 2",
    },
    {
      dataField: "field3",
      text: "Field 3",
    },
    {
      dataField: "field4",
      text: "Field 4",
    },
    {
      dataField: "field5",
      text: "Field 5",
    },
    {
      dataField: "field6",
      text: "Field 6",
    },
    {
      dataField: "field7",
      text: "Field 7",
    },
    {
      dataField: "field8",
      text: "Field 8",
    },
    {
      dataField: "field9",
      text: "Field 9",
    },
    {
      dataField: "field10",
      text: "Field 10",
    },
    {
      dataField: "field11",
      text: "Field 11",
    },
    {
      dataField: "field12",
      text: "Field 12",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Producto 1",
      price: 3.45,
      field1: 1,
      field2: 2,
      field3: 3,
      field4: 4,
      field5: 5,
      field6: 6,
      field7: 7,
      field8: 8,
      field9: 9,
      field10: 10,
      field11: 11,
      field12: 12,
    },
    {
      id: 2,
      name: "Producto 2",
      price: 4.45,
      field1: 1,
      field2: 2,
      field3: 3,
      field4: 4,
      field5: 5,
      field6: 6,
      field7: 7,
      field8: 8,
      field9: 9,
      field10: 10,
      field11: 11,
      field12: 12,
    },
    {
      id: 3,
      name: "Producto 3",
      price: 5.45,
      field1: 1,
      field2: 2,
      field3: 3,
      field4: 4,
      field5: 5,
      field6: 6,
      field7: 7,
      field8: 8,
      field9: 9,
      field10: 10,
      field11: 11,
      field12: 12,
    },
  ];

  const CustomToggleList = ({ columns, onColumnToggle, toggles }) => (
    /*     <div
      className="btn-group btn-group-toggle btn-group-vertical"
      data-toggle="buttons"
    >
      {columns
        .map(column => ({
          ...column,
          toggle: toggles[column.dataField]
        }))
        .map(column => (
          <button
            type="button"
            key={column.dataField}
            className={`btn btn-warning ${column.toggle ? "active" : ""}`}
            data-toggle="button"
            aria-pressed={column.toggle ? "true" : "false"}
            onClick={() => onColumnToggle(column.dataField)}
          >
            {column.text}
          </button>
        ))}
    </div> */
    <div className="text-center">
      {columns
        .map((column) => ({
          ...column,
          toggle: toggles[column.dataField],
        }))
        .map((column, index) => (
          <Form.Check
            type="checkbox"
            key={column.dataField}
            inline
            label={column.text}
            id={column.dataField}
            //aria-pressed={(column.toggle) ? "true" : "false"}
            checked={column.toggle}
            aria-checked={column.toggle ? "true" : "false"}
            onChange={() => onColumnToggle(column.dataField)}
            //onClick={() => onColumnToggle(column.dataField)}
          />
        ))}
    </div>
  );

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ToolkitProvider
        keyField="id"
        data={products}
        columns={columns}
        columnToggle
      >
        {(props) => (
          <div>
            <CustomToggleList {...props.columnToggleProps} />
            <hr />
            <BootstrapTable {...props.baseProps} />
          </div>
        )}
      </ToolkitProvider>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Files);
