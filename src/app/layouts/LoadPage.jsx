import React, { cloneElement } from "react";

import Loader from "../components/Loader";

const LoadPage = (props) => {
  console.log(props.loading);
  return <>{props.loading ? <Loader /> : cloneElement(props.children)}</>;
};

export default LoadPage;
