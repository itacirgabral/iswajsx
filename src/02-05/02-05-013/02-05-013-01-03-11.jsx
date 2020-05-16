import React from "react";

const SvgComponent = (props) => (
  <svg width={32} height={16} {...props}>
    <path d="M25 14l7-7-7-7v2.844L29.156 7 25 11.156V14zM25 8H0V6h25v2zM10 9v1.406L7.906 12.5 10 14.594V16l-3.5-3.5L10 9z" />
    <path d="M10 2v1h3a5 5 0 015 5c0 1.657-2.239 3-5 3h-3v3h3a6 6 0 000-12h-3z" />
  </svg>
);

export default SvgComponent;
