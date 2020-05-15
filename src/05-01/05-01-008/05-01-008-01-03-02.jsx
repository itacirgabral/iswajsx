import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4 4v1h5.5a3.5 3.5 0 110 7H1v2h8A5 5 0 109 4H4z" />
    <path d="M4.25.25L0 4.5l4.25 4.25.688-.719-3.5-3.531 3.5-3.531L4.25.25z" />
  </svg>
);

export default SvgComponent;
