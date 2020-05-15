import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 11h36V9H7v2z" />
    <path d="M17 5a6 6 0 000 12h3v-3h-3c-2.761 0-5-1.343-5-3a5 5 0 015-5h3V5h-3z" />
    <path d="M19 11l4.5 4.5L19 20v-9zm1 2.406v4.188l2.094-2.094L20 13.406zM7 17l-7-7 7-7v14zm-1-2.438V5.438L1.437 10 6 14.563z" />
    <path
      d="M6 14.563L1.437 10 6 5.437v9.125zM20 13.406l2.094 2.094L20 17.594v-4.188z"
      fill="#fff"
    />
    <path d="M30 4a6 6 0 000 12h5v-3h-5c-2.761 0-5-1.343-5-3a5 5 0 015-5h2V4h-2z" />
    <path d="M31 0l4.5 4.5L31 9V0zm1 2.406v4.188L34.094 4.5 32 2.406z" />
    <path d="M32 2.406L34.094 4.5 32 6.594V2.406z" fill="#fff" />
  </svg>
);

export default SvgComponent;
