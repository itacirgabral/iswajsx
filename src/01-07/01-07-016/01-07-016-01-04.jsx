import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 11h8v15h-8z" />
    <path fill="#fff" d="M16 12h6v13h-6z" />
    <path d="M15 0v9h2V0h-2zM8.625 3.625L7.219 5.063 11.187 9H14L8.625 3.625zM0 11h13v3H0zM6.156 14L13 20.813V18l-4-4H6.156z" />
  </svg>
);

export default SvgComponent;