import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 6h15v13H9z" />
    <path fill="#fff" d="M11 8h6v9h-6z" />
    <path d="M5 0C0 0 0 5 0 5h2c0-3 3-3 3-3h1c1.832 0 2.535 1.129 2.813 2h2.093C10.282.012 6 0 6 0H5zM0 5c0 5 5 5 5 5h3V8H5C2 8 2 5 2 5H0z" />
  </svg>
);

export default SvgComponent;
