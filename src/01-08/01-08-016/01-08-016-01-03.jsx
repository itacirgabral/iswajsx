import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={30} {...props}>
    <path d="M8 15h15v15H8zM14 0h2v15h-2zM1.625 15.813L8 22.186V25L.219 17.219l1.406-1.407z" />
  </svg>
);

export default SvgComponent;
