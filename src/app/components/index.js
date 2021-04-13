import React from "react";
import { Alert } from "react-bootstrap";

export const DangerAlert = ({ messsage }) => (
    <div>
      <Alert variant="danger">{messsage}</Alert>
    </div>
  );
  