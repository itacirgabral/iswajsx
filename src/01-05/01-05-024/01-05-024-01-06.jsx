import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M20 0v27H8V0l6 6 6-6z" />
    <path d="M20 9v3H8V9h12z" fill="#fff" />
    <path d="M1.625 11.813L8 18.186V21L.219 13.219l1.406-1.406z" />
  </svg>
);

export default SvgComponent;
