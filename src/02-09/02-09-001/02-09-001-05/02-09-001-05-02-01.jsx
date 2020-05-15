import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 7v14l7-7-7-7zm1 2.438L20.594 14 16 18.563V9.438z" />
    <path d="M8 0a8 8 0 000 16h7v-4H8c-3.314 0-6-1.79-6-4a6 6 0 016-6h20a8 8 0 018 8v4h2v-4c0-5.523-4.477-10-10-10H8z" />
    <path d="M16 9.438v9.124L20.594 14 16 9.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
