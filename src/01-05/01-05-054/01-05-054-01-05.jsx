import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6.938 13.375l-7 12.125L6 29l7-12.125-6.063-3.5z" />
    <path
      d="M7.313 14.75l-6 10.375 2.156 1.25 6-10.375-2.156-1.25z"
      fill="#fff"
    />
    <path d="M3.5.406l-3.469 2 4.063 7.031 6.906 4L3.5.408z" />
  </svg>
);

export default SvgComponent;