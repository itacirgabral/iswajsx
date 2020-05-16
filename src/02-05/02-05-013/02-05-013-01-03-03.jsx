import React from "react";

const SvgComponent = (props) => (
  <svg width={32} height={16} {...props}>
    <path d="M7 14L0 7l7-7v2.844L2.844 7 7 11.156V14zM7 8h25V6H7v2zM22 9v1.406l2.094 2.094L22 14.594V16l3.5-3.5L22 9z" />
    <path d="M22 2v1h-3a5 5 0 00-5 5c0 1.657 2.239 3 5 3h3v3h-3a6 6 0 010-12h3z" />
  </svg>
);

export default SvgComponent;
