import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0v5.656H7V1H2.344V0H8z" />
    <path d="M6.586 4.243L3.05 7.778l-.707-.707L5.88 3.536l.707.707zM4.464 2.121L.93 5.657.222 4.95l3.535-3.536.707.707z" />
  </svg>
);

export default SvgComponent;