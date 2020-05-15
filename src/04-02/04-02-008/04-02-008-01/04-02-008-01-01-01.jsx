import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M12 9l-4 4 .719.719L12 10.406l3.281 3.313L16 13l-4-4z" />
    <path d="M11.5 13v5h1v-5h-1zM23 9l-4 4 .719.719L23 10.406l3.281 3.313L27 13l-4-4z" />
    <path d="M22.5 13v5h1v-5h-1z" />
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z" />
  </svg>
);

export default SvgComponent;