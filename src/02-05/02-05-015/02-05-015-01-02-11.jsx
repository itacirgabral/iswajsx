import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M36 11H0V9h36v2z" />
    <path d="M26 5a6 6 0 010 12h-3v-3h3c2.761 0 5-1.343 5-3a5 5 0 00-5-5h-3V5h3z" />
    <path d="M24 11l-4.5 4.5L24 20v-9zm-1 2.406v4.188L20.906 15.5 23 13.406zM36 17l7-7-7-7v14zm1-2.438V5.438L41.563 10 37 14.563z" />
    <path
      d="M37 14.563L41.563 10 37 5.437v9.125zM23 13.406L20.906 15.5 23 17.594v-4.188z"
      fill="#fff"
    />
    <path d="M11 4v1h2a5 5 0 015 5c0 1.657-2.239 3-5 3H8v3h5a6 6 0 000-12h-2z" />
    <path d="M12 0L7.5 4.5 12 9V0zm-1 2.406v4.188L8.906 4.5 11 2.406z" />
    <path d="M11 2.406L8.906 4.5 11 6.594V2.406z" fill="#fff" />
  </svg>
);

export default SvgComponent;
