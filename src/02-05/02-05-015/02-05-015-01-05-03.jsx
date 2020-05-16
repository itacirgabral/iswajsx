import React from "react";

const SvgComponent = (props) => (
  <svg width={43} height={20} {...props}>
    <path d="M7 11h36V9H7v2z" />
    <path d="M14 5v1h3a5 5 0 015 5c0 1.657-2.239 3-5 3h-2v3h2a6 6 0 000-12h-3z" />
    <path d="M15 11l-4.5 4.5L15 20v-9zm-1 2.406v4.188L11.906 15.5 14 13.406zM7 17l-7-7 7-7v14zm-1-2.438V5.438L1.437 10 6 14.563z" />
    <path
      d="M6 14.563L1.437 10 6 5.437v9.125zM14 13.406L11.906 15.5 14 17.594v-4.188z"
      fill="#fff"
    />
    <path d="M28 4v1h2a5 5 0 015 5c0 1.657-2.239 3-5 3h-5v3h5a6 6 0 000-12h-2z" />
    <path d="M29 0l-4.5 4.5L29 9V0zm-1 2.406v4.188L25.906 4.5 28 2.406z" />
    <path d="M28 2.406L25.906 4.5 28 6.594V2.406z" fill="#fff" />
  </svg>
);

export default SvgComponent;
