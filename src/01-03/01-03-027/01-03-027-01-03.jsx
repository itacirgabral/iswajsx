import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 15h15v15H9zM11 0H9v15h2V0z" />
    <path d="M2 16s0-3 3-3h1s3 0 3 3h2s0-5-5-5H5s-5 0-5 5h2zM0 16c0 5 5 5 5 5h1c5 0 5-5 5-5H9c0 3-3 3-3 3H5c-3 0-3-3-3-3H0z" />
  </svg>
);

export default SvgComponent;