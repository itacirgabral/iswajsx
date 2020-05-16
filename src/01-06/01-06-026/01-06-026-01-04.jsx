import React from "react";

const SvgComponent = (props) => (
  <svg width={30} height={22} {...props}>
    <path d="M15 7h15v15H15z" />
    <path fill="#fff" d="M17 9h11v11H17z" />
    <path d="M0 7h14v2H0zM12 0l-1.406 1.406L15.188 6H18l-6-6zM6.188 9L13 15.813V13L9 9H6.187z" />
  </svg>
);

export default SvgComponent;
