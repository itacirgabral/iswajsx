import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={25} {...props}>
    <path d="M7 0L0 7h2.719l4.219-4.25L11.188 7H14L7 0zM6 7v18l14-14-1.406-1.406L8 20.188V7H6z" />
  </svg>
);

export default SvgComponent;
