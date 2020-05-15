import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 14h2V0H0v8h2V2h4v12z" />
    <path d="M8 0v14h1V0H8zM2 2v6H0v1h3V3h2v11h1V2H2z" fill="#fff" />
  </svg>
);

export default SvgComponent;
