import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 14h15v13H9zM5 2v6h2V4h2v8h2V2H5z" />
    <path d="M15 6h-2V0h6v12h-2V2h-2v4z" fillRule="evenodd" />
    <path d="M0 19h8v2H0z" />
  </svg>
);

export default SvgComponent;
