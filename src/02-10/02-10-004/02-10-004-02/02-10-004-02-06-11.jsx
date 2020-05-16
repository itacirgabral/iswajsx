import React from "react";

const SvgComponent = (props) => (
  <svg width={32} height={16} {...props}>
    <path d="M16 0v2l3.5 3.5L16 9v2l5.5-5.5L16 0z" />
    <path d="M32 10c0-2.402-4.079-4.425-9.5-4.906v1.281C26.942 6.872 30 7.85 30 9c0 1.657-6.268 3-14 3S2 10.657 2 9c0-1.106 2.833-2.05 7-2.563V5.095c-5.118.385-9 2.2-9 4.406v2C0 14.538 5.82 16 13 16h7c6.627 0 12-2.134 12-6z" />
    <path d="M10 0v2l3.5 3.5L10 9v2l5.5-5.5L10 0z" />
  </svg>
);

export default SvgComponent;
