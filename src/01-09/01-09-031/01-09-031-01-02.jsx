import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 4h15v15H9z" />
    <path fill="#fff" d="M11 6h6v11h-6z" />
    <path d="M5 0C0 0 0 5 0 5h2c0-3 3-3 3-3h1c3 0 3 3 3 3V4h1.906C10.282.012 6 0 6 0H5zM0 5c0 5 5 5 5 5h1c1.328 0 2.284-.357 3-.875V5c0 3-3 3-3 3H5C2 8 2 5 2 5H0z" />
  </svg>
);

export default SvgComponent;
