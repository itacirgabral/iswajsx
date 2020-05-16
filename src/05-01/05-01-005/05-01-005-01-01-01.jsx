import React from "react";

const SvgComponent = (props) => (
  <svg width={50} height={11} {...props}>
    <path d="M0 5h42v4H0V5zM47 4h1v7h-1V4z" />
    <path d="M50 2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

export default SvgComponent;
