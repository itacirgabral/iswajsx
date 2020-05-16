import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={45} {...props}>
    <path d="M7.5 0a7.5 7.5 0 100 15H12a6 6 0 010 12H9a9 9 0 100 18h5v-4H7a5 5 0 110-10h3c5.523 0 10-4.477 10-10s-4.477-10-10-10H6.5a4.5 4.5 0 010-9H18V0H7.5z" />
  </svg>
);

export default SvgComponent;
