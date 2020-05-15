import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M14.1 1H24v9.9l-2.01-2.011V3.01H16.11L14.101 1z" />
    <path d="M18.385 5.201L0 23.586 1.414 25 19.8 6.615l-1.414-1.414zM12 28l5.5-5.5L12 17v1.414l4.086 4.086L12 26.586V28z" />
    <path d="M1 12c0 6.075 4.925 11 11 11v-1C6.477 22 2 17.523 2 12v-2H1v2zM4 6L9.5.5 15 6h-1.414L9.5 1.914 5.414 6H4z" />
    <path d="M20 17C13.925 17 9 12.075 9 6h1c0 5.523 4.477 10 10 10h2v1h-2z" />
  </svg>
);

export default SvgComponent;
