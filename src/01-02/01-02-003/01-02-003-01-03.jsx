import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4 12h15v15H4zM0 2v6h2V4h2v8h2V2H0z" />
    <path d="M10 6H8V0h6v12h-2V2h-2v4z" fillRule="evenodd" />
  </svg>
);

export default SvgComponent;