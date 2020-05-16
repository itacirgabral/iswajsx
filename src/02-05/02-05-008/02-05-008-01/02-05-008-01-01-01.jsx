import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={17} {...props}>
    <path d="M7 0L0 7h14L7 0zM6 7v10h12v-2H8V7H6z" />
  </svg>
);

export default SvgComponent;
