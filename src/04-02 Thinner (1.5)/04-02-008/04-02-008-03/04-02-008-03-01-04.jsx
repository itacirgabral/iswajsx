import React from "react";

const SvgComponent = (props) => (
  <svg width={35} height={35} {...props}>
    <path d="M5 13V8h1v4h4v1H5z" />
    <path d="M9.594 7.719L6.75 10.53l.719.719 2.812-2.844-.687-.687zM16 10v5h-1v-4h-4v-1h5z" />
    <path d="M13.531 11.75l-2.812 2.844.687.687 2.844-2.812-.719-.719zM20 13V8h1v4h4v1h-5z" />
    <path d="M24.594 7.719L21.75 10.53l.719.719 2.812-2.844-.687-.687zM31 10v5h-1v-4h-4v-1h5z" />
    <path d="M28.531 11.75l-2.812 2.844.687.687 2.844-2.812-.719-.719z" />
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
  </svg>
);

export default SvgComponent;
