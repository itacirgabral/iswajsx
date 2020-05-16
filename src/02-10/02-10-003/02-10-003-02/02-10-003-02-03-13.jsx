import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={32} {...props}>
    <path d="M11 14H9l-3.5 3.5L2 14H0l5.5 5.5L11 14z" />
    <path d="M10 32c2.761 0 5-5.373 5-12v-9c0-6.075-2.015-11-4.5-11h-2C5.462 0 3 5.82 3 13h5.063C8.309 6.718 9.303 2 10.5 2 11.88 2 13 8.268 13 16s-1.12 14-2.5 14c-1.097 0-2.007-3.995-2.344-9.5H3C3.155 26.892 6.233 32 10 32z" />
  </svg>
);

export default SvgComponent;
