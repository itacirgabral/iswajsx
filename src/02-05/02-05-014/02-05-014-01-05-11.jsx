import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M36 8H0V6h36v2z" />
    <path d="M30 2v1h-3a5 5 0 00-5 5c0 1.657 2.239 3 5 3h2v3h-2a6 6 0 010-12h3z" />
    <path d="M29 8l4.5 4.5L29 17V8zm1 2.406v4.188l2.094-2.094L30 10.406zM36 14l7-7-7-7v14zm1-2.438V2.438L41.563 7 37 11.563z" />
    <path
      d="M37 11.563L41.563 7 37 2.437v9.126zM30 10.406l2.094 2.094L30 14.594v-4.188z"
      fill="#fff"
    />
    <path d="M17 2v1h-3a5 5 0 00-5 5c0 1.657 2.239 3 5 3h2v3h-2a6 6 0 010-12h3z" />
    <path d="M16 8l4.5 4.5L16 17V8zm1 2.406v4.188l2.094-2.094L17 10.406z" />
    <path d="M17 10.406l2.094 2.094L17 14.594v-4.188z" fill="#fff" />
  </svg>
);

export default SvgComponent;
