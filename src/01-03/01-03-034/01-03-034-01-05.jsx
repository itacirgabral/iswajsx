import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M16 0h13v15H16z" />
    <path fill="#fff" d="M18 2h5v11h-5z" />
    <path d="M14 4H1v2h13V4zM14 2H0V0h14v2z" />
    <path d="M8.344 4.5L6.938 5.938 14 13v-2.813L8.344 4.5z" />
  </svg>
);

export default SvgComponent;
