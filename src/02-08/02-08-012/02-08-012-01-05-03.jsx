import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={14} {...props}>
    <path d="M0 0v6.364L6.364 0H0zm.685.685l4 .022L.707 4.685l-.022-4z" />
    <path d="M2.828 3.536l9.193 9.192a4 4 0 005.657 0 5 5 0 000-7.071l-3.536 3.535c1.172 1.172 1.647 2.597 1.06 3.182-.585.586-2.01.111-3.181-1.06L3.536 2.828l-.708.708z" />
    <path d="M.685.685l.022 4L4.685.707l-4-.022z" fill="#fff" />
  </svg>
);

export default SvgComponent;
