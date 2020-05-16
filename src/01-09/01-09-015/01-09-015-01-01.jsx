import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={30} {...props}>
    <path d="M13 15h8v15h-8z" />
    <path fill="#fff" d="M14 16h6v13h-6z" />
    <path d="M0 15v2h13v-2H0zM17 0h1v15h-1zM14 2h1v13h-1zM11 4h1v11h-1zM27.375 17.813L21 24.188V27l7.781-7.781-1.406-1.407z" />
  </svg>
);

export default SvgComponent;
