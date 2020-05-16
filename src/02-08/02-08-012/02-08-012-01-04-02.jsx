import React from "react";

const SvgComponent = (props) => (
  <svg width={13} height={22} {...props}>
    <path d="M13 5L8.5.5 4 5h9zM9 5v13a4 4 0 01-4 4 5 5 0 01-5-5h5c0 1.657.672 3 1.5 3S8 18.657 8 17V5h1z" />
  </svg>
);

export default SvgComponent;
