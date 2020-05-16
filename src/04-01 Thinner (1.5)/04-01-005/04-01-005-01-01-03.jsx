import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={46} {...props}>
    <path d="M17.5 11C7.835 11 0 18.835 0 28.5S7.835 46 17.5 46 35 38.165 35 28.5 27.165 11 17.5 11zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM12.5 5l5 5 .719-.719L13.937 5 18.22.719 17.5 0l-5 5z" />
    <path d="M16.5 5.5v-1h6v1h-6z" />
  </svg>
);

export default SvgComponent;
