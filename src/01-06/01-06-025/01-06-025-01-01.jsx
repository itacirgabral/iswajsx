import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 7h15v15H15z" />
    <path fill="#fff" d="M17 9h11v11H17z" />
    <path d="M0 7h15v2H0zM12 0l-1.406 1.406L16.188 7H19l-7-7z" />
    <path d="M6 4L3.875 6.125 15 17.25V13L6 4z" />
  </svg>
);

export default SvgComponent;
