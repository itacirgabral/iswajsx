import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M16 12h-2l-3.5-3.5L7 12H5l5.5-5.5L16 12z" />
    <path d="M6.5 0c1.92 0 3.517 2.3 4.156 5.5H8.781C8.396 2.858 7.522 1 6.5 1 5.12 1 4 4.358 4 8.5v8C4 20.642 5.12 24 6.5 24c1.085 0 1.998-2.1 2.344-5h1.937c-.567 3.468-2.259 6-4.281 6h-2C2.015 25 0 21.194 0 16.5v-8C0 3.806 2.015 0 4.5 0h2z" />
    <path d="M16 18h-2l-3.5-3.5L7 18H5l5.5-5.5L16 18z" />
  </svg>
);

export default SvgComponent;
