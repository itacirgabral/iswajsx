import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={30} {...props}>
    <path d="M6 17h15v13H6z" />
    <path fill="#fff" d="M8 19h6v9H8z" />
    <path d="M13 0h2v15h-2zM2 9L.594 10.406 5.187 15H8L2 9z" />
  </svg>
);

export default SvgComponent;
