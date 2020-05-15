import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 0a4 4 0 00-4 4v1h1V4a3 3 0 013-3h1c1.657 0 3 1.79 3 4v5.406A2.98 2.98 0 0011.5 10a3 3 0 000 6 2.98 2.98 0 001.5-.406v2.812A2.98 2.98 0 0011.5 18a3 3 0 000 6 2.98 2.98 0 001.5-.406V25c0 3.283-4 9-4 9h10s-4-5.717-4-9V5a5 5 0 00-5-5H9zm2.5 11.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 8a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
    <path d="M0 5l5.5 5.5L11 5H0z" />
  </svg>
);

export default SvgComponent;
