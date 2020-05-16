import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={15} {...props}>
    <path d="M15 0v15h8V0h-8zM0 0h13v4H0zM4.75 6.781l-1 1.719L13 13.844v-2.281L4.75 6.78z" />
  </svg>
);

export default SvgComponent;
