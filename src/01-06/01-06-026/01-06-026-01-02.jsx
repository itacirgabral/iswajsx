import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 7h15v15H15z" />
    <path fill="#fff" d="M17 9h6v11h-6z" />
    <path d="M0 7h15v2H0zM12 0l-1.406 1.406L16.188 7H19l-7-7zM6.188 9L15 17.813V15L9 9H6.187z" />
  </svg>
);

export default SvgComponent;
