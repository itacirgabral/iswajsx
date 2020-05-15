import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 6v15h8V6h-8z" />
    <path d="M25.656.344L20 6l3 1.25 4.781-4.781L25.656.344zM0 6h15v4H0zM7 10l8 8v-2.813L9.812 10H7z" />
  </svg>
);

export default SvgComponent;