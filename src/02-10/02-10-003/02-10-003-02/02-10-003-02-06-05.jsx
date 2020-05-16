import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={32} {...props}>
    <path d="M0 13h2l3.5 3.5L9 13h2l-5.5 5.5L0 13z" />
    <path d="M10 32c-2.761 0-5-5.373-5-12v-.5h1.125C6.46 25.522 7.605 30 9 30c1.657 0 3-6.268 3-14S10.657 2 9 2C7.644 2 6.528 6.237 6.156 12H5v-1C5 4.925 7.015 0 9.5 0h2C14.538 0 16 5.82 16 13v7c0 6.627-2.134 12-6 12z" />
  </svg>
);

export default SvgComponent;
