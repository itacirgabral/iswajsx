import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M21 18a8 8 0 11-16 0 8 8 0 1116 0z" />
    <path d="M13 12a6 6 0 000 12V12z" fill="#fff" />
    <path d="M7 0h2v13H7z" />
    <path d="M1.406 6.406L0 7.813l6.844 6.843a6.971 6.971 0 011.218-1.594L1.407 6.407z" />
  </svg>
);

export default SvgComponent;
