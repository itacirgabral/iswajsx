import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M36 11H0V9h36v2z" />
    <path d="M29 5v1h-3a5 5 0 00-5 5c0 1.657 2.239 3 5 3h2v3h-2a6 6 0 010-12h3z" />
    <path d="M28 11l4.5 4.5L28 20v-9zm1 2.406v4.188l2.094-2.094L29 13.406zM36 17l7-7-7-7v14zm1-2.438V5.438L41.563 10 37 14.563z" />
    <path
      d="M37 14.563L41.563 10 37 5.437v9.125zM29 13.406l2.094 2.094L29 17.594v-4.188z"
      fill="#fff"
    />
    <path d="M13 4a6 6 0 000 12h5v-3h-5c-2.761 0-5-1.343-5-3a5 5 0 015-5h2V4h-2z" />
    <path d="M14 0l4.5 4.5L14 9V0zm1 2.406v4.188L17.094 4.5 15 2.406z" />
    <path d="M15 2.406L17.094 4.5 15 6.594V2.406z" fill="#fff" />
  </svg>
);

export default SvgComponent;
