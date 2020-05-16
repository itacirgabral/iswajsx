import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={30} {...props}>
    <path d="M0 17h15v13H0zM0 0h2v15H0zM11 5h2v10h-2V5zM18.594 9.406L13 15h2.844L20 10.844l-1.406-1.438z" />
  </svg>
);

export default SvgComponent;
