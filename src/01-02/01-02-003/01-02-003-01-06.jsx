import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4 13h15v14H4zM0 2v6h2V4h2v7h2V2H0z" />
    <path d="M8 6V0h6v11h-2V2h-2v4H8z" fillRule="evenodd" />
  </svg>
);

export default SvgComponent;
