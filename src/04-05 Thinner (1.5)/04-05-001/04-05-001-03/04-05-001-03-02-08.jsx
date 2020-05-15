import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M11 0a4 4 0 00-4 4v1.75h1V4c0-1.38 1.343-2.5 3-2.5s3 1.12 3 2.5v1.75h1V4a4 4 0 00-4-4zM7 4.25H0v1.5h7v-1.5z" />
    <path d="M11 3a2 2 0 00-2 2v.75h4V5a2 2 0 00-2-2z" />
  </svg>
);

export default SvgComponent;
