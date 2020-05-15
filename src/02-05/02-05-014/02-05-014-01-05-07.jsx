import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M36 11H0V9h36v2z" />
    <path d="M29 4v1h-2a5 5 0 00-5 5c0 1.657 2.239 3 5 3h5v3h-5a6 6 0 010-12h2z" />
    <path d="M28 0l4.5 4.5L28 9V0zm1 2.406v4.188L31.094 4.5 29 2.406zM36 17l7-7-7-7v14zm1-2.438V5.438L41.563 10 37 14.563z" />
    <path
      d="M37 14.563L41.563 10 37 5.437v9.125zM29 2.406L31.094 4.5 29 6.594V2.406z"
      fill="#fff"
    />
    <path d="M17 4v1h-2a5 5 0 00-5 5c0 1.657 2.239 3 5 3h5v3h-5a6 6 0 010-12h2z" />
    <path d="M16 0l4.5 4.5L16 9V0zm1 2.406v4.188L19.094 4.5 17 2.406z" />
    <path d="M17 2.406L19.094 4.5 17 6.594V2.406z" fill="#fff" />
  </svg>
);

export default SvgComponent;
