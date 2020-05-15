import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 9h11v18H7z" />
    <path fill="#fff" d="M9 11h7v14H9z" />
    <path d="M13 .344l-.875.5L16.844 9H18L13 .344zM6 0l-.688.719L13.595 9H15L6 0zM2.469 3.5l-.5.875 8 4.625H12L2.469 3.5zM.5 7.219l-.25.968L7 10V9h.125L.5 7.219zM18 18v2h8v-2h-8z" />
  </svg>
);

export default SvgComponent;