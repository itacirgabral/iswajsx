import React from "react";

const SvgComponent = (props) => (
  <svg width={26} height={23} {...props}>
    <path d="M12 0L5 7h14l-7-7zm0 1.438L16.594 6H7.406L12 1.437zM11 7v12a4 4 0 004 4h2c3.866 0 7-2.686 7-6h-7c0 2.21-.895 4-2 4a2 2 0 01-2-2V7h-2z" />
    <path d="M0 13v1h26v-1H0z" />
    <path d="M12 1.438L7.406 6h9.188L12 1.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;
