import React from "react";

const SvgComponent = (props) => (
  <svg width={43} height={17} {...props}>
    <path d="M7 8h36V6H7v2z" />
    <path d="M13 2v1h3a5 5 0 015 5c0 1.657-2.239 3-5 3h-2v3h2a6 6 0 000-12h-3z" />
    <path d="M14 8l-4.5 4.5L14 17V8zm-1 2.406v4.188L10.906 12.5 13 10.406zM7 14L0 7l7-7v14zm-1-2.438V2.438L1.437 7 6 11.563z" />
    <path
      d="M6 11.563L1.437 7 6 2.437v9.126zM13 10.406L10.906 12.5 13 14.594v-4.188z"
      fill="#fff"
    />
    <path d="M26 2v1h3a5 5 0 015 5c0 1.657-2.239 3-5 3h-2v3h2a6 6 0 000-12h-3z" />
    <path d="M27 8l-4.5 4.5L27 17V8zm-1 2.406v4.188L23.906 12.5 26 10.406z" />
    <path d="M26 10.406L23.906 12.5 26 14.594v-4.188z" fill="#fff" />
  </svg>
);

export default SvgComponent;
