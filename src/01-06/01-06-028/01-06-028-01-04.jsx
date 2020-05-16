import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={30} {...props}>
    <path d="M12 14a8 8 0 100 16 8 8 0 000-16z" />
    <path d="M12 16a6 6 0 100 12 6 6 0 000-12z" fill="#fff" />
    <path d="M18 0v15h2V0h-2zM1.406 9.594L0 11l4.156 4.156a9.052 9.052 0 011.469-1.344L1.406 9.595z" />
  </svg>
);

export default SvgComponent;
