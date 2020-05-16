import React from "react";

const SvgComponent = (props) => (
  <svg width={30} height={22} {...props}>
    <path d="M15 7h15v15H15zM0 7h15v2H0zM12 0l-1.406 1.406L16.188 7H19l-7-7zM6.188 9L15 17.813V15L9 9H6.187z" />
  </svg>
);

export default SvgComponent;
