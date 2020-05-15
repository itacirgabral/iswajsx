import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M11 13l7 7h-2l-5-5-5 5H4l7-7z" />
    <path d="M2 0v21a3 3 0 003 3c1.657 0 3-1.79 3-4h6a6 6 0 01-6 6H5a5 5 0 01-5-5V0h2z" />
  </svg>
);

export default SvgComponent;
