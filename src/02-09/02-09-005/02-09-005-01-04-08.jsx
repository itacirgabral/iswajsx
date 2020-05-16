import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={20} {...props}>
    <path d="M.5 4.5L5 0v9L.5 4.5zM18 14C18 8.477 13.523 4 8 4H5v1h3a9 9 0 019 9v6h1v-6z" />
  </svg>
);

export default SvgComponent;
