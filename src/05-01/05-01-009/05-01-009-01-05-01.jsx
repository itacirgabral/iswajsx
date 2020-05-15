import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17.5 13C7.835 13 0 20.835 0 30.5S7.835 48 17.5 48 35 40.165 35 30.5 27.165 13 17.5 13zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zM17.5 12a3 3 0 110-6 3 3 0 010 6z" />
    <path d="M16.75 7h1.5V0h-1.5v7zM11.5 0a3 3 0 100 6 3 3 0 000-6z" />
    <path d="M10.75 5h1.5v7h-1.5V5zM23.5 0a3 3 0 100 6 3 3 0 000-6z" />
    <path d="M22.75 5h1.5v7h-1.5V5z" />
  </svg>
);

export default SvgComponent;
