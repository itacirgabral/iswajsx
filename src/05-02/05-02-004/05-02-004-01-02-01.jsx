import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0v12h1V0H8zM0 2v1h5v9h1V2H0z" fill="#fff" />
    <path d="M8 12V0H0v2h6v10h2z" />
  </svg>
);

export default SvgComponent;
