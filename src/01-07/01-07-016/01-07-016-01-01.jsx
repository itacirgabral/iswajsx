import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 11h8v15h-8z" />
    <path fill="#fff" d="M16 12h6v13h-6z" />
    <path d="M15 0v11h2V0h-2zM8.625 3.625L7.219 5.063 13.187 11H15v-1L8.625 3.625zM0 11h15v3H0zM6.156 14L15 22.813V20l-6-6H6.156z" />
  </svg>
);

export default SvgComponent;
