import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={18} {...props}>
    <path d="M0 3h15v15H0z" />
    <path
      d="M8 2v6H7V5H2v3H0v3h2v5h6v-2H7v-3h1v2h2v-2h1v2h2v-2h2V8h-2V2s0-1-1-1-1 1-1 1v6h-1V2s0-1-1-1-1 1-1 1z"
      fill="#fff"
    />
    <path d="M12 0s-2 0-2 2v6h1V2s0-1 1-1 1 1 1 1v6h1V2s0-2-2-2zm-2 11v3h4v-3h-1v2h-2v-2h-1z" />
    <path d="M9 0S7 0 7 2v6h1V2s0-1 1-1 1 1 1 1v6h1V2s0-2-2-2zM7 11v3h4v-3h-1v2H8v-2H7z" />
  </svg>
);

export default SvgComponent;
