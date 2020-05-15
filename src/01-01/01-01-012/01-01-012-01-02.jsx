import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M1 14h15v15H1zM2 0L.5 1.5 13 14h3L2 0z" />
    <path fill="#fff" d="M3 16h6v11H3z" />
  </svg>
);

export default SvgComponent;