import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5 8L0 3l.719-.719L5.406 7H11v1H5z" />
    <path d="M12 5.031L6.594 5 2.28.719 3 0l4 4h5v1.031z" />
  </svg>
);

export default SvgComponent;
