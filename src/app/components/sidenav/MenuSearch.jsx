import React from "react";

import { FormControl, InputGroup } from "react-bootstrap";

import { FaSearch } from "react-icons/fa";

function MenuSearch(props) {
  return (
    <div
      id="menu-search"
      className=" d-flex justify-content-center align-items-center px-3"
    >
      <InputGroup className="d-flex justify-content-center align-items-center">
        <FormControl
          className="search-input"
          placeholder="Search"
          aria-label="Search"
        />
        <InputGroup.Append className="search-button d-flex justify-content-center align-items-center">
          <FaSearch className="search-icon" />
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

export default MenuSearch;
