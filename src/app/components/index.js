import React from "react";
import { Alert } from "react-bootstrap";

export const DangerAlert = ({ messsage }) => (
  <Alert variant="danger">
    <small>{messsage}</small>
  </Alert>
);
