import React from "react";

const SvgComponent = (props) => (
  <svg width={12} height={22} {...props}>
    <path d="M12 18l-4.5-4.5L3 18h9z" />
    <path d="M1 0v17c0 1.657.895 3 2 3a2 2 0 002-2h5a4 4 0 01-4 4H5a5 5 0 01-5-5V0h1z" />
  </svg>
);

export default SvgComponent;
