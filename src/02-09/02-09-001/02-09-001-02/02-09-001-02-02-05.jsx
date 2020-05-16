import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={12} {...props}>
    <path d="M29 0v11L18 0h11zm-1 1h-7.594L28 8.563V1z" />
    <path d="M13 12c3.672 0 6.958-1.55 9.313-4l1.875-1.813-1.375-1.375-1.375 1.344C19.09 7.307 16.178 8 13 8c-3.153 0-6.043-.677-8.375-1.813L1.406 3 0 4.406l3.844 3.75C6.187 10.514 9.408 12 13 12z" />
    <path d="M28 1v7.563L20.406 1H28z" fill="#fff" />
  </svg>
);

export default SvgComponent;
