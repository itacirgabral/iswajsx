import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M16 22a8 8 0 11-16 0 8 8 0 1116 0z" />
    <path d="M8 28a6 6 0 110-12" fill="#fff" />
    <path d="M14 0h2v22h-2z" />
    <path d="M4.688 4.688L3.28 6.093 14.187 17 16 16 4.687 4.687zM22.063 15.094L15 22.188V25l8.5-8.5-1.438-1.406z" />
  </svg>
);

export default SvgComponent;
