import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M18 0C8.335 0 .5 7.835.5 17.5S8.335 35 18 35s17.5-7.835 17.5-17.5S27.665 0 18 0zm0 2c8.56 0 15.5 6.94 15.5 15.5C33.5 26.06 26.56 33 18 33 9.44 33 2.5 26.06 2.5 17.5 2.5 8.94 9.44 2 18 2z" />
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5V36h5V17.5C5 10.044 10.596 4 17.5 4h1C25.404 4 31 10.044 31 17.5V36h5V17.5C36 7.835 28.165 0 18.5 0h-1z" />
  </svg>
);

export default SvgComponent;