import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={30} {...props}>
    <path d="M16 22a8 8 0 11-16 0 8 8 0 1116 0zM11.594 2.406l1.437 1.406L2.812 14H1v-1L11.594 2.406z" />
    <path d="M7 0h2v13H7z" />
  </svg>
);

export default SvgComponent;
