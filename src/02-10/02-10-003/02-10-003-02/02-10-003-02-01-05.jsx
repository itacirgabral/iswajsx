import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={32} {...props}>
    <path d="M9.5 19.5L4 14h11l-5.5 5.5z" />
    <path d="M5 32c-2.761 0-5-5.373-5-12v-9C0 4.925 2.015 0 4.5 0h2C9.538 0 12 5.82 12 13H6.937C6.691 6.718 5.697 2 4.5 2 3.12 2 2 8.268 2 16s1.12 14 2.5 14c1.097 0 2.007-3.995 2.344-9.5H12C11.845 26.892 8.767 32 5 32z" />
  </svg>
);

export default SvgComponent;
