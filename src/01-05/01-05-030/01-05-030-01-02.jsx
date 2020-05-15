import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M11 0h8v18h-8z" />
    <path fill="#fff" d="M12 1h3v16h-3z" />
    <path d="M11 0v4H5v4H3V0h8zM0 16h11v2H0z" />
  </svg>
);

export default SvgComponent;