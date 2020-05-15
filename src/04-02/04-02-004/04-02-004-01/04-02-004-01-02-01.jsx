import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z" />
    <path d="M23.5 10c-2.485 0-4.5 1.79-4.5 4h1c0-1.105 1.567-2 3.5-2s3.5.895 3.5 2h1c0-2.21-2.015-4-4.5-4z" />
  </svg>
);

export default SvgComponent;
