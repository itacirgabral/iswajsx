import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={26} {...props}>
    <path d="M9 11h15v15H9zM10 0a3 3 0 00-3 3c0 1.301.842 2.397 2 2.813V11h2V5.812c1.158-.415 2-1.51 2-2.812a3 3 0 00-3-3zM0 17v2h9v-2H0z" />
  </svg>
);

export default SvgComponent;
