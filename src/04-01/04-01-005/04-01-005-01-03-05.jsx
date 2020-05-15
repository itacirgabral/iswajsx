import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17.5 11C7.835 11 0 18.835 0 28.5S7.835 46 17.5 46 35 38.165 35 28.5 27.165 11 17.5 11zm0 2C26.06 13 33 19.94 33 28.5 33 37.06 26.06 44 17.5 44 8.94 44 2 37.06 2 28.5 2 19.94 8.94 13 17.5 13zM12 10l5-5-.719-.719L12 8.563 7.719 4.28 7 5l5 5z" />
    <path d="M12.5 6h-1V0h1v6zM23 0l5 5-.719.719L23 1.437 18.719 5.72 18 5l5-5z" />
    <path d="M23.5 4h-1v6h1V4z" />
  </svg>
);

export default SvgComponent;
