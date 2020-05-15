import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5 17h15v13H5z" />
    <path fill="#fff" d="M7 19h11v9H7z" />
    <path d="M18 0h2v15h-2zM1.406 9.594L0 11l4 4h2.813L1.405 9.594zM24.594 18.594L21 22.187V25l5-5-1.406-1.406z" />
  </svg>
);

export default SvgComponent;