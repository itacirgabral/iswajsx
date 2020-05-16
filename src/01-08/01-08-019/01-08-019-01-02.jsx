import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={30} {...props}>
    <path d="M6 15h15v15H6z" />
    <path fill="#fff" d="M8 17h6v11H8z" />
    <path d="M13 0h2v15h-2zM2 9L.594 10.406 6 15.812V15h2L2 9z" />
  </svg>
);

export default SvgComponent;
