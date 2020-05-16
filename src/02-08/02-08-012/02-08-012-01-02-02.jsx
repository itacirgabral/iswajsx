import React from "react";

const SvgComponent = (props) => (
  <svg width={26} height={23} {...props}>
    <path d="M14 0l7 7H7l7-7zm0 1.438L9.406 6h9.188L14 1.437zM15 7v12a4 4 0 01-4 4H9c-3.866 0-7-2.686-7-6h7c0 2.21.895 4 2 4a2 2 0 002-2V7h2z" />
    <path d="M26 13v1H0v-1h26z" />
    <path d="M14 1.438L18.594 6H9.406L14 1.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
