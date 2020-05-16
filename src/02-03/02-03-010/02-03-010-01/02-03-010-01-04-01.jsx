import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={16} {...props}>
    <path d="M19 0v14H2V1H0v15h21V0h-2z" />
    <path d="M14 0v9H7V1H5v10h11V0h-2z" />
    <path d="M16 0v11H5V1H2v13h17V0h-3z" fill="#fff" />
  </svg>
);

export default SvgComponent;
