import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={19} {...props}>
    <path d="M15 4v15h8V4h-8zM0 4h15v4H0z" />
    <path d="M6.219-.188L4.5.813 15 19v-3.969L6.219-.188z" />
  </svg>
);

export default SvgComponent;
