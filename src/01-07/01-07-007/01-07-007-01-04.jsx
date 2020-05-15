import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M21 22a8 8 0 11-16 0 8 8 0 1116 0z" />
    <path d="M19 22a6 6 0 11-12 0 6 6 0 1112 0z" fill="#fff" />
    <path d="M9.406 2.406L7.97 3.812l10.031 10V14h2v-1L9.406 2.406z" />
    <path d="M12 0v13h2V0h-2zM1.406 9.594L0 11l5 5a9.907 9.907 0 011.375-1.469L1.406 9.594z" />
  </svg>
);

export default SvgComponent;
