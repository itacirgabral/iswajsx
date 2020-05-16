import React from "react";

const SvgComponent = (props) => (
  <svg width={25} height={20} {...props}>
    <path d="M0 7L6.5.5 13 7H0zM6 7v6c0 3.866 2.239 7 5 7h5a9 9 0 009-9H14c0 3.314-1.343 6-3 6a4 4 0 01-4-4V7H6z" />
  </svg>
);

export default SvgComponent;
