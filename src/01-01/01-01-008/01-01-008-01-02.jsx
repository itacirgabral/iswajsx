import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0v7h2V2h4v16h2V0H8z" />
    <path d="M16 18a8 8 0 11-16 0 8 8 0 1116 0z" />
    <path d="M8 24a6 6 0 110-12" fill="#fff" />
  </svg>
);

export default SvgComponent;
