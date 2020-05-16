import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={30} {...props}>
    <path d="M13 0h2v15h-2zM2.406 4.406L.97 5.813 10.188 15H13L2.406 4.406zM0 15h15v15H0z" />
    <path fill="#fff" d="M2 17h11v11H2z" />
    <path d="M12 23.5a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0z" />
  </svg>
);

export default SvgComponent;
