import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 6v15h8V6h-8z" />
    <path fill="#fff" d="M16 7h6v13h-6z" />
    <path d="M11.344.344L9.219 2.469 12.75 6H17L11.344.344zM0 6h15v4H0zM7 10l8 8v-2.813L9.812 10H7z" />
  </svg>
);

export default SvgComponent;
