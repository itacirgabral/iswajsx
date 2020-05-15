import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M14 0h15v15H14z" />
    <path fill="#fff" d="M16 2h6v11h-6z" />
    <path d="M14 4H1v2h13V4zM14 2H0V0h14v2z" />
    <path d="M8.344 4.5L6.938 5.938 14 13v-2.813L8.344 4.5z" />
  </svg>
);

export default SvgComponent;