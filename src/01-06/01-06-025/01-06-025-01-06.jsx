import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 7h15v15H15zM0 7h14v2H0zM12 0l-1.406 1.406L15.188 6H18l-6-6z" />
    <path d="M6 4L3.875 6.125 13 15.25V11L6 4z" />
  </svg>
);

export default SvgComponent;