import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 11h36V9H7v2z" />
    <path d="M19 4v1h-2a5 5 0 00-5 5c0 1.657 2.239 3 5 3h5v3h-5a6 6 0 010-12h2z" />
    <path d="M18 0l4.5 4.5L18 9V0zm1 2.406v4.188L21.094 4.5 19 2.406zM7 17l-7-7 7-7v14zm-1-2.438V5.438L1.437 10 6 14.563z" />
    <path
      d="M6 14.563L1.437 10 6 5.437v9.125zM19 2.406L21.094 4.5 19 6.594V2.406z"
      fill="#fff"
    />
    <path d="M31 4v1h-2a5 5 0 00-5 5c0 1.657 2.239 3 5 3h5v3h-5a6 6 0 010-12h2z" />
    <path d="M30 0l4.5 4.5L30 9V0zm1 2.406v4.188L33.094 4.5 31 2.406z" />
    <path d="M31 2.406L33.094 4.5 31 6.594V2.406z" fill="#fff" />
  </svg>
);

export default SvgComponent;