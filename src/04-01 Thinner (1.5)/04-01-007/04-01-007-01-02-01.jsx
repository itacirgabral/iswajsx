import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v6h6V5H1V0H0z" />
    <path d="M9.5 0C6.6 0 3.963 1.162 2.062 3.063l.72.718A9.472 9.472 0 019.5 1c2.623 0 5 1.062 6.719 2.781l1.093 1.094.688-.719-1.063-1.062A10.513 10.513 0 009.5 0z" />
  </svg>
);

export default SvgComponent;
