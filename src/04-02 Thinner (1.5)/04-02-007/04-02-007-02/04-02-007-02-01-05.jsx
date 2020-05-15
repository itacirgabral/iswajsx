import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 12V8h1v4H6zM8 12V8h1v4H8zM12 12V8h1v4h-1zM14 12V8h1v4h-1z" />
    <path d="M7.5 15L4 11.5l.719-.688 2.781 2.75 3-2.968 3 2.969 2.781-2.75.719.687-3.5 3.5-3-3-3 3zM20 12V8h1v4h-1zM22 12V8h1v4h-1zM26 12V8h1v4h-1zM28 12V8h1v4h-1z" />
    <path d="M21.5 15L18 11.5l.719-.688 2.781 2.75 3-2.968 3 2.969 2.781-2.75.719.687-3.5 3.5-3-3-3 3z" />
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
  </svg>
);

export default SvgComponent;
