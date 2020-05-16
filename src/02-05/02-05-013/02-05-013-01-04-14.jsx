import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={23} {...props}>
    <path d="M4.243 17.343L20.506 1.08l1.414 1.414L5.657 18.757l-1.414-1.414zM7 11L1.5 5.5 7 0v11z" />
    <path d="M9.9 23L0 13.1V23h9.9zM18 16C18 9.925 13.075 5 7 5v1c5.523 0 10 4.477 10 10v2h1v-2z" />
  </svg>
);

export default SvgComponent;
