import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 12h2l3.5-3.5L9 12h2L5.5 6.5 0 12z" />
    <path d="M9.5 0C7.58 0 5.983 2.3 5.344 5.5h1.875C7.604 2.858 8.478 1 9.5 1 10.88 1 12 4.358 12 8.5v8c0 4.142-1.12 7.5-2.5 7.5-1.085 0-1.998-2.1-2.344-5H5.22c.567 3.468 2.259 6 4.281 6h2c2.485 0 4.5-3.806 4.5-8.5v-8C16 3.806 13.985 0 11.5 0h-2z" />
    <path d="M0 18h2l3.5-3.5L9 18h2l-5.5-5.5L0 18z" />
  </svg>
);

export default SvgComponent;