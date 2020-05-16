import React from "react";

const SvgComponent = (props) => (
  <svg width={13} height={4} {...props}>
    <path d="M0 .5V2h4v1.5h5V2h4V.5H8V2H5V.5H0z" />
  </svg>
);

export default SvgComponent;
