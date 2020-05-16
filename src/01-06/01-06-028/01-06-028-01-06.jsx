import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={30} {...props}>
    <path d="M8 14a8 8 0 110 16 8 8 0 010-16zM2 0v15H0V0h2zM18.594 9.594L20 11l-4.156 4.156a9.052 9.052 0 00-1.469-1.344l4.219-4.218z" />
  </svg>
);

export default SvgComponent;
