import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4 0v30h15V15H6V0H4z" />
    <path d="M17 17H6v11h11V17z" fill="#fff" />
    <path d="M4.5 5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
  </svg>
);

export default SvgComponent;
