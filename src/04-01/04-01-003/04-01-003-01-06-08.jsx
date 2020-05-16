import React from "react";

const SvgComponent = (props) => (
  <svg width={9} height={9} {...props}>
    <path d="M9 0H1.929v1.016h6.055v6.055H9V0z" />
    <path d="M6.879 3.536L2.636 7.778l.707.707 4.243-4.242-.707-.707zM4.757 1.414L.515 5.657l.707.707 4.242-4.243-.707-.707z" />
  </svg>
);

export default SvgComponent;
