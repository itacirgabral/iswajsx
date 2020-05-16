import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={30} {...props}>
    <path d="M0 15h15v15H0zM0 0h2v15H0z" />
    <path d="M18.594 9.594L20 11l-5 5v-1h-1.813l5.407-5.406z" />
  </svg>
);

export default SvgComponent;
