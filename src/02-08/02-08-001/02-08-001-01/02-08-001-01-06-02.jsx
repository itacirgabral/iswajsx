import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M11 0a4 4 0 014 4v1h-1V4a3 3 0 00-3-3C8.79 1 7 3.686 7 7v1c0 2.981 4 8 4 8H0s4-5.019 4-8V7a7 7 0 017-7z" />
    <path d="M20 5l-5.5 5.5L9 5h2l3.5 3.5L18 5h2z" />
  </svg>
);

export default SvgComponent;