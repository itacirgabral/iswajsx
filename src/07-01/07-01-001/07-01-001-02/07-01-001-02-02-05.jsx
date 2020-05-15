import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M47 3h27v8H0V3h27v6h20V3z" />
    <path d="M47 3v6H27V3h20z" fill="#fff" />
    <path d="M33.594 0L43 5.438V7H31V5h7.313L31 .781V0h2.594z" />
  </svg>
);

export default SvgComponent;
