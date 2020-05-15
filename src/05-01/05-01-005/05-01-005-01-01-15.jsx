import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M55 1H13v4h42V1zM4 2v1h7V2H4z" />
    <path d="M2.5 5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
  </svg>
);

export default SvgComponent;
