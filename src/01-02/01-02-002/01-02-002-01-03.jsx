import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={30} {...props}>
    <path d="M16 22a8 8 0 11-16 0 8 8 0 1116 0z" />
    <path d="M0 0h2v22H0z" />
    <path d="M11.313 4.688L0 16l1.813 1L12.719 6.094l-1.406-1.407z" />
  </svg>
);

export default SvgComponent;
