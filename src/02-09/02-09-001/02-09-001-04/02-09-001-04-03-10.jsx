import React from "react";

const SvgComponent = (props) => (
  <svg width={34} height={27} {...props}>
    <path d="M16 18l9 9 9-9h-2l-7 7-7-7h-2zM18 0a9 9 0 019 9v9h-4V8a6 6 0 00-6-6H0V0h18z" />
  </svg>
);

export default SvgComponent;
