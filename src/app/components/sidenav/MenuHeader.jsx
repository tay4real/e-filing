import React, { useState } from "react";

import { Image } from "react-bootstrap";

import { FcSettings } from "react-icons/fc";
import { Link } from "react-router-dom";

function MenuHeader(props) {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };
  return (
    <div
      id="menu-header"
      className="d-flex justify-content-between align-items-center py-4 px-5 w-100"
    >
      <Image
        src="/images/efiling_logo_mdw.png"
        className="img-fluid"
        alt="logo"
      />{" "}
      <FcSettings className="setting-icon" onClick={handleToggle} />
      <div
        className="settings"
        style={{ display: isToggled ? "block" : "none" }}
      >
        <div className="d-flex flex-column card">
          <span className="border-bottom px-2 py-1">
            <a href={`${process.env.REACT_APP_DEV_BACKEND_URL}/auth/logout`}>
              Logout
            </a>
          </span>

          <span className="px-2 py-1 ">
            {" "}
            <Link>About E-Filing </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default MenuHeader;
