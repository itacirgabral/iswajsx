import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M18 6v1c2.21 0 4 2.239 4 5 0 2.21-2.126 3.792-4 4l-5 .563V16a4 4 0 00-4-4 3 3 0 00-3 3 5 5 0 005 5v5a3 3 0 01-3 3H0v4h6a7 7 0 007-7v-5h3a8 8 0 008-8 6 6 0 00-6-6zm-9 7a2 2 0 012 2v1.781L9 17a2 2 0 010-4z" />
    <path d="M18 0v2l-4.5 4.5L18 11v2l-6.5-6.5L18 0z" />
  </svg>
);

export default SvgComponent;
