import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M50 5H8v4h42V5zM3 4H2v7h1V4z" />
    <path d="M0 2.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z" />
  </svg>
);

export default SvgComponent;
