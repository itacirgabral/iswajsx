import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={22} {...props}>
    <path d="M23 3l-3.5 3.5L16 3h1l2.5 2.5L22 3h1z" />
    <path d="M16.5 0a3.5 3.5 0 013.469 3h-1.032c-.233-1.14-1.229-2-2.437-2A2.5 2.5 0 0014 3.5V13c0 2.848 3 8 3 8h-7s3-5.152 3-8V3.5A3.5 3.5 0 0116.5 0zM9 17l-4.5 4.5L0 17h1l3.5 3.5L8 17h1zM7 0a3 3 0 00-3 3v10c0 1.49-2 4-2 4h5s-2-2.51-2-4V3a2 2 0 114 0v4h1V3a3 3 0 00-3-3z" />
  </svg>
);

export default SvgComponent;
