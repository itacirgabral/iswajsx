import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5 8L0 3l.719-.719L5.406 7H11v1H5z" />
    <path d="M12 5.031L6.594 5 2.28.719 3 0l4 4h5v1.031zM20 8l5-5-.719-.719L19.594 7H14v1h6z" />
    <path d="M13 5.031L18.406 5 22.72.719 22 0l-4 4h-5v1.031z" />
  </svg>
);

export default SvgComponent;