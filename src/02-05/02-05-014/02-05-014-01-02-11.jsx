import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M36 8H0V6h36v2z" />
    <path d="M26 2a6 6 0 010 12h-3v-3h3c2.761 0 5-1.343 5-3a5 5 0 00-5-5h-3V2h3z" />
    <path d="M24 8l-4.5 4.5L24 17V8zm-1 2.406v4.188L20.906 12.5 23 10.406zM36 14l7-7-7-7v14zm1-2.438V2.438L41.563 7 37 11.563z" />
    <path
      d="M37 11.563L41.563 7 37 2.437v9.126zM23 10.406L20.906 12.5 23 14.594v-4.188z"
      fill="#fff"
    />
    <path d="M13 2a6 6 0 010 12h-3v-3h3c2.761 0 5-1.343 5-3a5 5 0 00-5-5h-3V2h3z" />
    <path d="M11 8l-4.5 4.5L11 17V8zm-1 2.406v4.188L7.906 12.5 10 10.406z" />
    <path d="M10 10.406L7.906 12.5 10 14.594v-4.188z" fill="#fff" />
  </svg>
);

export default SvgComponent;