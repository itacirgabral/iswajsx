import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5 17h15v13H5z" />
    <path fill="#fff" d="M7 19h6v9H7z" />
    <path d="M18 0h2v15h-2zM9 5H7v10h2V5zM1.406 9.406L0 10.844 4.156 15H7L1.406 9.406z" />
  </svg>
);

export default SvgComponent;