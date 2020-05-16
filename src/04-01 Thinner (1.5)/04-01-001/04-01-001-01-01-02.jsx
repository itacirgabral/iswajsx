import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={35} {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16c-.466 0-.921-.04-1.375-.094C9.318 32.586 4 25.784 4 17.5S9.318 2.413 16.125 1.594c.457-.04.907-.094 1.375-.094z" />
  </svg>
);

export default SvgComponent;
