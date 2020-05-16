import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={22} {...props}>
    <path d="M23 3l-3.5 3.5L16 3h7zm-1.688.688h-3.625L19.5 5.5l1.813-1.813z" />
    <path d="M16.5 0a3.5 3.5 0 013.469 3h-1.032c-.233-1.14-1.229-2-2.437-2A2.5 2.5 0 0014 3.5V13c0 2.848 3 8 3 8h-7s3-5.152 3-8V3.5A3.5 3.5 0 0116.5 0zM9 17l-4.5 4.5L0 17h9zm-1.688.688H1.688L4.5 20.5l2.813-2.813zM7 0a3 3 0 00-3 3v10c0 1.49-2 4-2 4h5s-2-2.51-2-4V3a2 2 0 114 0v4h1V3a3 3 0 00-3-3z" />
    <path
      d="M21.313 3.688L19.5 5.5l-1.813-1.813h3.625zM7.313 17.688L4.5 20.5l-2.813-2.813h5.625z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
