import React from "react";

const SvgComponent = (props) => (
  <svg width={15} height={8} {...props}>
    <path d="M4 0C1.784 0 0 1.784 0 4s1.784 4 4 4h7c2.216 0 4-1.784 4-4s-1.784-4-4-4H4zm0 2v4c-1.108 0-2-.892-2-2s.892-2 2-2zm1 0h2v4H5V2zm3 0h2v4H8V2zm3 0c1.108 0 2 .892 2 2s-.892 2-2 2V2z" />
  </svg>
);

export default SvgComponent;
