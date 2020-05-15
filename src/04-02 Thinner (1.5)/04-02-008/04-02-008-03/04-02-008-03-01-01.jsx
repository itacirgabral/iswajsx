import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 10.5L10.5 7l.719.719L8.406 10.5l2.813 2.781L10.5 14 7 10.5z" />
    <path d="M10 10v1h4v4h1v-5h-5z" />
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
    <path d="M20 10.5L23.5 7l.719.719-2.813 2.781 2.813 2.781L23.5 14 20 10.5z" />
    <path d="M23 10v1h4v4h1v-5h-5z" />
  </svg>
);

export default SvgComponent;
