import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={22} {...props}>
    <path d="M9 7h15v15H9z" />
    <path fill="#fff" d="M11 9h11v11H11z" />
    <path d="M12 7h2V4c0-3.99-4-4-4-4H8s4 0 0 0-4 4-4 4h2s0 2 0 0 2-2 2-2h2s-2 0 0 0 2 2 2 2v3z" />
    <path d="M11 7s0 4 0 0-4-4-4-4H4s4 0 0 0-4 4-4 4v2h2V7s0 2 0 0 2-2 2-2h3S5 5 7 5s2 2 2 2h2zM0 9s0 4 4 4h3s4 0 4-4H9c.101.118 0 2-2 2H4s-2 0-2-2H0z" />
  </svg>
);

export default SvgComponent;
