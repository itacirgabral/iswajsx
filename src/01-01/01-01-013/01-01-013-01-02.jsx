import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 7h15v15H6zM1 0L.4 1.5 16 7h5L1 0z" />
    <path fill="#fff" d="M8 9h6v11H8z" />
  </svg>
);

export default SvgComponent;
