import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M14 28a5 5 0 015 5v2a5 5 0 01-5 5H2v-3h12a3 3 0 003-3v-2a3 3 0 00-3-3H6v-1h8z" />
    <path d="M14 0v14h-1V0h1zm0 17v20h-1V17h1zm0 23v5h-1v-5h1z" />
    <path d="M14 5a5 5 0 015 5v2a5 5 0 01-5 5H6v-3h8a3 3 0 003-3V9a3 3 0 00-3-3H2V5h12z" />
    <path d="M13 0v14h-3V0h3zm0 17v20h-3V17h3zm0 23v5h-3v-5h3z" fill="#fff" />
    <path d="M6 10v11L.5 15.5 6 10zm-1 2.438L1.937 15.5 5 18.563v-6.125zM10 0v14H9V0h1zm0 17v20H9V17h1zm0 23v5H9v-5h1z" />
    <path d="M5 12.438v6.124L1.937 15.5 5 12.437z" fill="#fff" />
    <path d="M6 23v11L.5 28.5 6 23zm-1 2.438L1.937 28.5 5 31.563v-6.125z" />
    <path d="M5 25.438v6.125L1.937 28.5 5 25.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;