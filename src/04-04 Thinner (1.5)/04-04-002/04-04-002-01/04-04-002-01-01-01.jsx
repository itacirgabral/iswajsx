import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={35} {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
    <path d="M11.281 23.438L10 24.5c1.905 2.769 4.568 4.5 7.5 4.5 2.932 0 5.595-1.731 7.5-4.5l-1.281-1.063C22.553 25.845 20.205 27.5 17.5 27.5c-2.705 0-5.053-1.656-6.219-4.063z" />
  </svg>
);

export default SvgComponent;
