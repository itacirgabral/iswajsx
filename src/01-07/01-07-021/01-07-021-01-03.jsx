import React from "react";

const SvgComponent = (props) => (
  <svg width={25} height={22} {...props}>
    <path d="M8 7h15v15H8zM23 0l1.406 1.406L18.813 7H16l7-7zM1.625 7.813L8 14.188V17L.219 9.219l1.406-1.406z" />
  </svg>
);

export default SvgComponent;
