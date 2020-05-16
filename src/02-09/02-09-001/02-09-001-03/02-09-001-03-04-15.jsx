import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={17} {...props}>
    <path d="M19 0v2H7a5 5 0 00-5 5v1a5 5 0 005 5h16v4H8a8 8 0 01-8-8V7a7 7 0 017-7h12z" />
  </svg>
);

export default SvgComponent;
