import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { Image } from "react-bootstrap";
import { connect } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userActions";

const logo = "/images/efiling_logo_mdw.png";

export const TopNav = (props) => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [isOpen, setSearchBox] = useState(false);

  const openSearchBox = (e) => {
    e.preventDefault();
    setSearchBox(true);
  };
  const closeSearchBox = (e) => {
    e.preventDefault();
    setSearchBox(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    history.push("/auth/login");
  };
  return (
    <nav
      className="navbar navbar-light sticky-top"
      style={{ backgroundColor: "#2f4358" }}
    >
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <Image src={logo} className="img-fluid" alt="logo" />
        </NavLink>
        <div className="d-flex flex-end">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ display: isOpen ? "block" : "none" }}
            />
            <button
              className="btn text-white"
              type="submit"
              style={{ display: isOpen ? "block" : "none" }}
              onClick={closeSearchBox}
            >
              <b>x</b>
            </button>
            <button
              className="btn btn-outline-light"
              type="submit"
              style={{ display: isOpen ? "none" : "block" }}
              onClick={openSearchBox}
            >
              <FaSearch className="search-icon" />
            </button>
          </form>
          <button
            className="btn btn-danger ml-2"
            onClick={handleLogout}
            type="submit"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
