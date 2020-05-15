import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v2h8a3 3 0 013 3v10h2V5a5 5 0 00-5-5H0z" />
    <path
      d="M8 0a5 5 0 015 5v10h1V5a5.999 5.999 0 00-2.688-5H8zM0 2v1h8a2 2 0 012 2v10h1V5a3 3 0 00-3-3H0z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
