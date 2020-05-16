import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={18} {...props}>
    <path d="M3 12a3 3 0 100 6 3 3 0 000-6zM9 6a3 3 0 100 6 3 3 0 000-6zM15 0a3 3 0 100 6 3 3 0 000-6z" />
  </svg>
);

export default SvgComponent;
