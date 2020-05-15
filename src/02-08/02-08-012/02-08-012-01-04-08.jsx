import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M20 6.364V0h-6.364L20 6.364z" />
    <path d="M17.172 3.536l-9.193 9.192a4 4 0 01-5.657 0 5 5 0 010-7.071l3.536 3.535c-1.172 1.172-1.647 2.597-1.06 3.182.585.586 2.01.111 3.181-1.06l8.485-8.486.708.708z" />
  </svg>
);

export default SvgComponent;
