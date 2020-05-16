import React from "react";

const SvgComponent = (props) => (
  <svg width={4} height={4} {...props}>
    <path d="M4 0v3.182H2.984V1.724L.818 3.889l-.707-.707 2.165-2.166H.818V0H4z" />
  </svg>
);

export default SvgComponent;
