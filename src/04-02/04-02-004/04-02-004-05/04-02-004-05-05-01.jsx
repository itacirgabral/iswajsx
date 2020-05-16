import React from "react";

const SvgComponent = (props) => (
  <svg width={9} height={4} {...props}>
    <path d="M.719 3.312L0 2.593 2.625 0l2.594 2.594-.719.719-1.875-1.875L.719 3.312z" />
    <path d="M4.5 3.312l-.719-.719L6.406 0 9 2.593l-.719.719-1.875-1.875L4.5 3.312z" />
  </svg>
);

export default SvgComponent;
