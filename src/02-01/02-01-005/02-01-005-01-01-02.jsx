import React from "react";

const SvgComponent = (props) => (
  <svg width={18} height={17} {...props}>
    <path d="M4 7v4H0v2h4v4h2v-4h4v-2H6V7H4zM12 0v4H8v2h4v4h2V6h4V4h-4V0h-2z" />
  </svg>
);

export default SvgComponent;
