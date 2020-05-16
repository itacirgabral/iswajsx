import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={30} {...props}>
    <path d="M13 0h2v15h-2zM2.406 4.406L.97 5.813 10.188 15H13L2.406 4.406zM0 17h15v13H0z" />
    <path fill="#fff" d="M2 19h6v9H2z" />
  </svg>
);

export default SvgComponent;
