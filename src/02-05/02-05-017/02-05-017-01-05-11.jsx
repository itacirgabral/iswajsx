import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 7v2h31V7H0zM18.5 9.5L13 15h11l-5.5-5.5zm0 1.406L21.594 14h-6.188l3.094-3.094zM31 15l7-7-7-7v14zm1-2.438V3.438L36.563 8 32 12.563z" />
    <path
      d="M32 12.563L36.563 8 32 3.437v9.126zM18.5 10.938L15.437 14h6.126L18.5 10.937z"
      fill="#fff"
    />
    <path d="M25 0v15a2 2 0 01-4 0h-5c0 2.21 2.239 4 5 4s5-1.79 5-4V0h-1zM5.5 9.5L0 15h11L5.5 9.5zm0 1.406L8.594 14H2.406L5.5 10.906z" />
    <path d="M5.5 10.938L2.437 14h6.126L5.5 10.937z" fill="#fff" />
    <path d="M12 0v15a2 2 0 01-4 0H3c0 2.21 2.239 4 5 4s5-1.79 5-4V0h-1z" />
  </svg>
);

export default SvgComponent;