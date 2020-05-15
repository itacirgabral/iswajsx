import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 17h15v13H9z" />
    <path fill="#fff" d="M11 19h6v9h-6z" />
    <path d="M22 0h2v15h-2zM11.406 4.406L9.97 5.813 19.188 15H22L11.406 4.406zM0 22h8v2H0z" />
  </svg>
);

export default SvgComponent;