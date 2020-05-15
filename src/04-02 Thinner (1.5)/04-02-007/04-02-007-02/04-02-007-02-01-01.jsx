import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6 11v4h1v-4H6zM8 11v4h1v-4H8zM12 11v4h1v-4h-1zM14 11v4h1v-4h-1z" />
    <path d="M7.5 8L4 11.5l.719.688L7.5 9.438l3 2.968 3-2.969 2.781 2.75L17 11.5 13.5 8l-3 3-3-3zM20 11v4h1v-4h-1zM22 11v4h1v-4h-1zM26 11v4h1v-4h-1zM28 11v4h1v-4h-1z" />
    <path d="M21.5 8L18 11.5l.719.688 2.781-2.75 3 2.968 3-2.969 2.781 2.75L31 11.5 27.5 8l-3 3-3-3z" />
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
  </svg>
);

export default SvgComponent;