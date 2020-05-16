import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={30} {...props}>
    <path d="M13 15h8v15h-8z" />
    <path fill="#fff" d="M14 16h6v13h-6z" />
    <path d="M19 0h2v15h-2zM0 15v4h13v-4H0zM27.375 17.813L21 24.188V27l7.781-7.781-1.406-1.407z" />
  </svg>
);

export default SvgComponent;
