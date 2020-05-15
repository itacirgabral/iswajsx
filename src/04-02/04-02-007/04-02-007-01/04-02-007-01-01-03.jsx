import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 13l4 4 .719-.719L8.406 13l3.313-3.281L11 9l-4 4z" />
    <path d="M11 15h5v-1h-5v1zM11 12h5v-1h-5v1zM19 13l4 4 .719-.719L20.406 13l3.313-3.281L23 9l-4 4z" />
    <path d="M23 15h5v-1h-5v1zM23 12h5v-1h-5v1z" />
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z" />
  </svg>
);

export default SvgComponent;
