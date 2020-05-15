import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M14 7v14l7-7-7-7zm1 2.438L19.594 14 15 18.563V9.438z" />
    <path d="M8 0a8 8 0 000 16h6v-4H8c-3.314 0-6-1.79-6-4a6 6 0 016-6h35V0H8z" />
    <path d="M15 9.438v9.124L19.594 14 15 9.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
