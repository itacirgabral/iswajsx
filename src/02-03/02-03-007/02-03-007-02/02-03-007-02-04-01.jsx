import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={22} {...props}>
    <path d="M0 0v11.656L10.344 22l1.406-1.406L2 10.844V0H0z" />
    <path d="M6 0v9.156l8.594 8.594L16 16.344l-8-8V0H6z" />
    <path d="M2 0v10.844l9.75 9.75 2.844-2.844L6 9.156V0H2z" fill="#fff" />
  </svg>
);

export default SvgComponent;
