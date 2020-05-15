import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0h8v18H8z" />
    <path fill="#fff" d="M9 1h6v16H9z" />
    <path d="M0 0v8h2V4h4V0H0zM20.25 6.938l-1.406 1.406-.844.844V12l3.656-3.656-1.406-1.406z" />
  </svg>
);

export default SvgComponent;
