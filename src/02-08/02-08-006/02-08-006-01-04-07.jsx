import React from "react";

const SvgComponent = (props) => (
  <svg width={25} height={22} {...props}>
    <path d="M25 8.636V15h-6.364L25 8.636zM8.03 1.565a3 3 0 014.242 0l7.071 7.071c1.054 1.054 4.243 1.414 4.243 1.414l-3.536 3.536s-.36-3.189-1.414-4.243l-7.071-7.07A2 2 0 108.737 5.1l2.828 2.828-.707.707-2.829-2.828a3 3 0 010-4.243zM18 15.636V22h-6.364L18 15.636z" />
    <path d="M1.03 8.565a3 3 0 014.242 0l7.071 7.071c1.054 1.054 4.243 1.414 4.243 1.414l-3.536 3.536s-.36-3.189-1.414-4.243l-7.071-7.07A2 2 0 001.737 12.1l2.828 2.828-.707.707-2.829-2.828a3 3 0 010-4.243z" />
  </svg>
);

export default SvgComponent;
