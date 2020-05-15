import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M18 4v2l-3.5 3.5L18 13v2l-5.5-5.5L18 4z" />
    <path d="M0 5c0-2.761 5.373-5 12-5h9c6.075 0 11 2.015 11 4.5v2c0 3.038-5.82 5.5-13 5.5V6.937c6.282-.246 11-1.241 11-2.437C30 3.12 23.732 2 16 2S2 3.12 2 4.5c0 1.097 3.995 2.007 9.5 2.344V12C5.108 11.845 0 8.767 0 5z" />
  </svg>
);

export default SvgComponent;