import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={30} {...props}>
    <path d="M15 15h8v15h-8z" />
    <path fill="#fff" d="M16 16h3v13h-3z" />
    <path d="M21 0h2v15h-2zM0 15h15v2H0zM15 3h2v12h-2zM10.063 7.219L8.624 8.625 15 15v-2.813L10.062 7.22zM3.938 22.969l-.532 1.937L15 28v-2.094L3.937 22.97z" />
  </svg>
);

export default SvgComponent;
