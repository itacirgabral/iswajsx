import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={15} {...props}>
    <path d="M16 0h13v15H16zM14 4H1v2h13V4zM14 2H0V0h14v2z" />
    <path d="M8.344 4.5L6.938 5.938 14 13v-2.813L8.344 4.5z" />
  </svg>
);

export default SvgComponent;
