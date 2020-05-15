import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 13l4 4 .719-.719L8.406 13l3.313-3.281L11 9l-4 4z" />
    <path d="M11 12.5v1h5v-1h-5zM19 13l4 4 .719-.719L20.406 13l3.313-3.281L23 9l-4 4z" />
    <path d="M23 12.5v1h5v-1h-5z" />
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
  </svg>
);

export default SvgComponent;