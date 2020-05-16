import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={30} {...props}>
    <path d="M8 17h15v13H8zM3 11c-3 0-3 3-3 3v3h2v-2.625V14c0-1 1-1 1-1h4c1 0 .997.962 1 1v1h2v-1c0-3-3-3-3-3H3zM14 0v15h2V0h-2zM0 25v2s0 3 3 3h4v-2H3s-1 0-1-1v-2H0z" />
  </svg>
);

export default SvgComponent;
