import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={35} {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z" />
    <path d="M11.531 23.219L10 24.5c1.905 2.769 4.568 4.5 7.5 4.5 2.932 0 5.595-1.731 7.5-4.5l-1.531-1.281C21.933 25.549 19.835 27 17.5 27c-2.335 0-4.433-1.45-5.969-3.781z" />
  </svg>
);

export default SvgComponent;
