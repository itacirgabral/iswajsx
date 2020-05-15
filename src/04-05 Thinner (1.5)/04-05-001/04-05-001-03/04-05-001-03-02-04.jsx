import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 .25v1.5h7V.25H8zM2 .25V1a2 2 0 104 0V.25H2z" />
    <path d="M0 .25V2a4 4 0 108 0V.25H7V2c0 1.38-1.343 2.5-3 2.5S1 3.38 1 2V.25H0z" />
  </svg>
);

export default SvgComponent;
