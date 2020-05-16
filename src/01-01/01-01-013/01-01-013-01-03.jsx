import React from "react";

const SvgComponent = (props) => (
  <svg width={17} height={22} {...props}>
    <path d="M2 7h15v15H2zM3 0C1.344 0 0 1.344 0 3c0 1.3.842 2.397 2 2.813V7h2V5.812C5.158 5.397 6 4.301 6 3c0-1.656-1.344-3-3-3z" />
  </svg>
);

export default SvgComponent;
