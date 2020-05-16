import React from "react";

const SvgComponent = (props) => (
  <svg width={6} height={6} {...props}>
    <path d="M6 6V1H5v4H1v1h5z" />
    <path d="M1.406.719l-.687.687L3.53 4.25l.719-.719L1.406.72z" />
  </svg>
);

export default SvgComponent;
