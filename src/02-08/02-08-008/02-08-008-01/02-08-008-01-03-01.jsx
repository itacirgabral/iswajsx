import React from "react";

const SvgComponent = (props) => (
  <svg width={19} height={26} {...props}>
    <path d="M7 0L0 7h2l5-5 5 5h2L7 0zM6 7v15a4 4 0 004 4h2c3.866 0 7-2.686 7-6h-7c0 2.21-.895 4-2 4a2 2 0 01-2-2V7H6z" />
  </svg>
);

export default SvgComponent;
