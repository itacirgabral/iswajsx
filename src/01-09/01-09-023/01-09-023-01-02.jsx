import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 13h15v15H0z" />
    <path fill="#fff" d="M2 15h6v11H2z" />
    <path d="M2.281.281L.844 1.687l8.5 8.47L12.188 13H15L2.281.281zM15 19v2h9v-2h-9z" />
  </svg>
);

export default SvgComponent;
