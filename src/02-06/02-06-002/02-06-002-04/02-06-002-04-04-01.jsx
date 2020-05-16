import React from "react";

const SvgComponent = (props) => (
  <svg width={33} height={50} {...props}>
    <path d="M4 0v1.5h4c12.979 0 23.5 10.521 23.5 23.5S20.979 48.5 8 48.5H0V50h8c13.807 0 25-11.193 25-25S21.807 0 8 0H4z" />
    <path
      d="M4 1.5v4h4c10.77 0 19.5 8.73 19.5 19.5S18.77 44.5 8 44.5H0v4h8c12.979 0 23.5-10.521 23.5-23.5S20.979 1.5 8 1.5H4z"
      fill="#fff"
    />
    <path d="M4 5.5V7h4c9.941 0 18 8.059 18 18S17.941 43 8 43H0v1.5h8c10.77 0 19.5-8.73 19.5-19.5S18.77 5.5 8 5.5H4z" />
  </svg>
);

export default SvgComponent;
