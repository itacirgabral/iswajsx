import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17.5 11C7.835 11 0 18.835 0 28.5S7.835 46 17.5 46 35 38.165 35 28.5 27.165 11 17.5 11zm0 2C26.06 13 33 19.94 33 28.5 33 37.06 26.06 44 17.5 44 8.94 44 2 37.06 2 28.5 2 19.94 8.94 13 17.5 13zM28.5 0l-5 5 .719.719L28.5 1.437l4.281 4.282L33.5 5l-5-5z" />
    <path d="M28 4h1v6h-1V4zM17.5 10l-5-5 .719-.719L17.5 8.563l4.281-4.282L22.5 5l-5 5z" />
    <path d="M17 6h1V0h-1v6zM6.5 0l-5 5 .719.719L6.5 1.437l4.281 4.282L11.5 5l-5-5z" />
    <path d="M6 4h1v6H6V4z" />
  </svg>
);

export default SvgComponent;
