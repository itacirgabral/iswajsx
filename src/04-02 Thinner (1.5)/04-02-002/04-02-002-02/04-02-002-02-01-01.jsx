import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={35} {...props}>
    <path d="M7 8v1h4.594l4.687 4.719L17 13l-5-5H7zM10.406 11l4.313 4.281L14 16l-4-4H5v-1h5.406zM23 8l-5 5 .719.719L23.406 9H28V8h-5zM24.594 11l-4.313 4.281L21 16l4-4h5v-1h-5.406z" />
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
  </svg>
);

export default SvgComponent;
