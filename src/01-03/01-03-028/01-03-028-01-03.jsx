import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 10h15v15H9zM1.406.094L0 1.5 8.5 10h2.813L1.405.094z" />
    <path d="M2 12s0-3 3-3h1s3 0 3 3h2s0-5-5-5H5s-5 0-5 5h2zM0 12c0 5 5 5 5 5h1c5 0 5-5 5-5H9c0 3-3 3-3 3H5c-3 0-3-3-3-3H0z" />
  </svg>
);

export default SvgComponent;