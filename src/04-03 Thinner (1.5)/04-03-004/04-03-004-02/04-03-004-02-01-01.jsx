import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
    <path d="M16.75 11v5.688l-3.219-1.844-.75 1.312L16 18l-3.219 1.844.75 1.312 3.219-1.843V23h1.5v-3.688l3.219 1.844.75-1.312L19 18l3.219-1.844-.75-1.312-3.219 1.844V11h-1.5z" />
  </svg>
);

export default SvgComponent;
