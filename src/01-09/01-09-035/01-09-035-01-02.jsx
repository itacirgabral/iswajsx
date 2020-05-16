import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={15} {...props}>
    <path d="M14 0h15v15H14z" />
    <path fill="#fff" d="M16 2h6v11h-6z" />
    <path d="M0 0v1.989L14 2V0H0zM3 13v2h11v-2H3z" />
  </svg>
);

export default SvgComponent;
