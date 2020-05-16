import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={30} {...props}>
    <path d="M9 15h15v15H9z" />
    <path fill="#fff" d="M11 17h6v11h-6z" />
    <path d="M22 0h2v15h-2zM11.406 4.406L9.97 5.813 19.188 15H22L11.406 4.406zM0 22h9v2H0z" />
  </svg>
);

export default SvgComponent;
