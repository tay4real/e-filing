import React from "react";

import { Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function MenuItem(props) {
  const { title, submenu } = props.item;

  return (
    <Card key={props.index}>
      <Accordion.Toggle
        className="menu-item .selected-menu-item"
        style={{ border: "0 !important" }}
        as={Card.Header}
        eventKey={props.index + 1}
      >
        <div className="px-4">{title.text}</div>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={props.index + 1}>
        <>
          {submenu.map((sub, key) => (
            <Link to={sub.path} key={key}>
              <Card.Body className="submenu-item ">
                <span className="px-4">
                  <small>{sub.text}</small>
                </span>
              </Card.Body>
            </Link>
          ))}
        </>
      </Accordion.Collapse>
    </Card>
  );
}

export default MenuItem;
