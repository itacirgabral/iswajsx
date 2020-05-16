import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={21} {...props}>
    <path d="M15 6v15h8V6h-8z" />
    <path fill="#fff" d="M16 7h6v13h-6z" />
    <path d="M11.344.344L9.219 2.469 11.75 5H16L11.344.344zM0 6h13v4H0zM7 10l6 6v-2.813L9.812 10H7z" />
  </svg>
);

export default SvgComponent;
