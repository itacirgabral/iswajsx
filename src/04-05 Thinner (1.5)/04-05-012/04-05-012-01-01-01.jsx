import React from "react";

const SvgComponent = (props) => (
  <svg width={36} height={36} {...props}>
    <path d="M18 0C8.335 0 .5 7.835.5 17.5S8.335 35 18 35s17.5-7.835 17.5-17.5S27.665 0 18 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z" />
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5V36h5V17.5C5 10.044 10.596 4 17.5 4h1C25.404 4 31 10.044 31 17.5V36h5V17.5C36 7.835 28.165 0 18.5 0h-1z" />
  </svg>
);

export default SvgComponent;
