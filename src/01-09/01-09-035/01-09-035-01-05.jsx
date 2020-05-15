import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M16 0h13v15H16z" />
    <path fill="#fff" d="M18 2h5v11h-5z" />
    <path d="M0 0v1.989L14 2V0H0zM3 13v2h11v-2H3z" />
  </svg>
);

export default SvgComponent;