import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M22.5 5l-5-5-.719.719L21.063 5 16.78 9.281 17.5 10l5-5zM17.5 11C7.835 11 0 18.835 0 28.5S7.835 46 17.5 46 35 38.165 35 28.5 27.165 11 17.5 11zm0 2C26.06 13 33 19.94 33 28.5 33 37.06 26.06 44 17.5 44 8.94 44 2 37.06 2 28.5 2 19.94 8.94 13 17.5 13z" />
    <path d="M18.5 4.5v1h-6v-1h6z" />
  </svg>
);

export default SvgComponent;
