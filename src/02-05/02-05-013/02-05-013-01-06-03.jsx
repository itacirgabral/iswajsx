import React from "react";

const SvgComponent = (props) => (
  <svg width={32} height={16} {...props}>
    <path d="M7 14L0 7l7-7v2.844L2.844 7 7 11.156V14zM7 8h25V6H7v2zM15 9v1.406L12.906 12.5 15 14.594V16l-3.5-3.5L15 9z" />
    <path d="M15 2v1h3a5 5 0 015 5c0 1.657-2.239 3-5 3h-3v3h3a6 6 0 000-12h-3z" />
  </svg>
);

export default SvgComponent;
