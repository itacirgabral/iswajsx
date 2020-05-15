import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
    <path d="M19 10v2c0 2.21 2.015 4 4.5 4s4.5-1.79 4.5-4v-2h-9zm1 1.5h7v.5c0 1.38-1.567 2.5-3.5 2.5S20 13.38 20 12v-.5z" />
    <rect width={1} x={23} y={11} />
  </svg>
);

export default SvgComponent;