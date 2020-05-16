import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={20} {...props}>
    <path d="M7 6l-7 7 7 7v-2l-5-5 5-5V6zM17 0a6 6 0 016 6v3a6 6 0 01-6 6H7v-4h11a3 3 0 003-3V6a4 4 0 00-4-4V0z" />
  </svg>
);

export default SvgComponent;
