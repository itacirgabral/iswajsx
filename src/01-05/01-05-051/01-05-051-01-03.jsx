import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 0v15h8V0h-8zM0 0h15v4H0zM4.75 6.781l-1 1.719L15 15v-2.281L4.75 6.78z" />
  </svg>
);

export default SvgComponent;