import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M36 11H0V9h36v2z" />
    <path d="M24 4v1h2a5 5 0 015 5c0 1.657-2.239 3-5 3h-5v3h5a6 6 0 000-12h-2z" />
    <path d="M25 0l-4.5 4.5L25 9V0zm-1 2.406v4.188L21.906 4.5 24 2.406zM36 17l7-7-7-7v14zm1-2.438V5.438L41.563 10 37 14.563z" />
    <path
      d="M37 14.563L41.563 10 37 5.437v9.125zM24 2.406L21.906 4.5 24 6.594V2.406z"
      fill="#fff"
    />
    <path d="M10 5v1h3a5 5 0 015 5c0 1.657-2.239 3-5 3h-3v3h3a6 6 0 000-12h-3z" />
    <path d="M11 11l-4.5 4.5L11 20v-9zm-1 2.406v4.188L7.906 15.5 10 13.406z" />
    <path d="M10 13.406L7.906 15.5 10 17.594v-4.188z" fill="#fff" />
  </svg>
);

export default SvgComponent;
