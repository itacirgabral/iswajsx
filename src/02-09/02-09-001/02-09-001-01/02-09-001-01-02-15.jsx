import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5 5a5 5 0 00-5 5v2a5 5 0 005 5h12v-3H5a3 3 0 01-3-3V9a3 3 0 013-3h9V5H5z" />
    <path d="M14 0v11l5.5-5.5L14 0zm1 2.438L18.063 5.5 15 8.563V2.436z" />
    <path d="M15 2.438v6.124L18.063 5.5 15 2.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
