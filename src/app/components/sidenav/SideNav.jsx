import React from "react";
import { Accordion, Card, Col } from "react-bootstrap";
import MenuItem from "./MenuItem";
import MenuSearch from "./MenuSearch";

function SideNav(props) {
  return (
    <div id="sidenav" className="overflow p-0 m-0 " sm={2}>
      <MenuSearch />
      <div className="overflow">
        <Accordion key={props.index} defaultActiveKey="0" id="menu-item">
          {props.menu.map((menuItem, key) => (
            <MenuItem item={menuItem} key={key} index={key} />
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default SideNav;
