import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M2 9h15v13H2z" />
    <path fill="#fff" d="M4 11h6v9H4z" />
    <path d="M2 0L.594 1.406 6.187 7H9L2 0zM23.375 7.813L18 13.188V16l6.781-6.781-1.406-1.406z" />
  </svg>
);

export default SvgComponent;
