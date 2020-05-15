import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0L.5 7.5 8 15V0z" />
    <path d="M8 4v1.5h4c12.979 0 23.5 10.521 23.5 23.5S24.979 52.5 12 52.5H4V54h8c13.807 0 25-11.193 25-25S25.807 4 12 4H8z" />
    <path
      d="M8 5.5v4h4c10.77 0 19.5 8.73 19.5 19.5S22.77 48.5 12 48.5H4v4h8c12.979 0 23.5-10.521 23.5-23.5S24.979 5.5 12 5.5H8z"
      fill="#fff"
    />
    <path d="M8 9.5V11h4c9.941 0 18 8.059 18 18s-8.059 18-18 18H4v1.5h8c10.77 0 19.5-8.73 19.5-19.5S22.77 9.5 12 9.5H8z" />
  </svg>
);

export default SvgComponent;