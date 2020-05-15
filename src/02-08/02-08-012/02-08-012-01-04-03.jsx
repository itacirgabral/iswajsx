import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 6.364V0h6.364L0 6.364z" />
    <path d="M2.828 3.536l9.193 9.192a4 4 0 005.657 0 5 5 0 000-7.071l-3.536 3.535c1.172 1.172 1.647 2.597 1.06 3.182-.585.586-2.01.111-3.181-1.06L3.536 2.828l-.708.708z" />
  </svg>
);

export default SvgComponent;