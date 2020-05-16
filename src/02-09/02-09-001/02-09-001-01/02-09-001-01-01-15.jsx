import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={17} {...props}>
    <path d="M5 5a5 5 0 00-5 5v2a5 5 0 005 5h12v-3H5a3 3 0 01-3-3V9a3 3 0 013-3h9V5H5z" />
    <path d="M14 0v11l5.5-5.5L14 0z" />
  </svg>
);

export default SvgComponent;
