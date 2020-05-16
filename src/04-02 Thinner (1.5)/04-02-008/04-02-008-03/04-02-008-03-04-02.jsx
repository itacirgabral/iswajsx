import React from "react";

const SvgComponent = (props) => (
  <svg width={6} height={6} {...props}>
    <path d="M0 0v5h1V1h4V0H0z" />
    <path d="M2.469 1.75l-.719.719L4.594 5.28l.687-.687L2.47 1.75z" />
  </svg>
);

export default SvgComponent;
