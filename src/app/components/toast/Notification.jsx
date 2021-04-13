import React, { useState } from "react";

function Notification(props) {
  const [show, setShow] = useState(false);
  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong className="mr-auto">{props.title}</strong>
          </Toast.Header>
          <Toast.Body>{props.message}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default Notification;
