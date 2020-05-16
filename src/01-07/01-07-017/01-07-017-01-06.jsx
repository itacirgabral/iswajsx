import React from "react";

const SvgComponent = (props) => (
  <svg width={17} height={30} {...props}>
    <path d="M0 17h15v13H0zM8 0v15H6V0h2zM15.063 7.938L16.5 9.344 10.812 15H8l7.063-7.063z" />
  </svg>
);

export default SvgComponent;
