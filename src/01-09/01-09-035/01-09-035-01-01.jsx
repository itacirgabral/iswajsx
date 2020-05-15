import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M14 0h15v15H14z" />
    <path fill="#fff" d="M16 2h11v11H16z" />
    <path d="M0 0v1.989L14 2V0H0zM3 13v2h11v-2H3z" />
  </svg>
);

export default SvgComponent;
