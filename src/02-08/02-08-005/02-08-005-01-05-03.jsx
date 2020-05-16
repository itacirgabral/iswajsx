import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={17} {...props}>
    <path d="M.05 8H5V3.05L.05 8zm1.68-.707L4.293 4.73v2.563H1.73z" />
    <path d="M2.525 1.282a3.5 3.5 0 00-.331 4.575l.729-.73a2.491 2.491 0 01.31-3.137 2.5 2.5 0 013.535 0l6.717 6.717c2.014 2.014 3.536 7.778 3.536 7.778l4.95-4.95S16.206 10.015 14.192 8L7.475 1.282a3.5 3.5 0 00-4.95 0z" />
    <path d="M1.73 7.293h2.563V4.73L1.73 7.293z" fill="#fff" />
  </svg>
);

export default SvgComponent;
