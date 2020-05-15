import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6.518 10.342l3.536-3.536-.707-.707-2.829 2.828L3.69 6.1l-.707.707 3.535 3.536zM4.84 3.182A4.006 4.006 0 016.032 6.01H5.016a3.009 3.009 0 00-3.005-3.005H.022v-.994l1.989-.022c1.104 0 2.104.47 2.828 1.193z" />
    <path d="M6.253 1.768A5.99 5.99 0 018.021 6.01H7.005A4.99 4.99 0 002.01 1.016H.022V0h1.989a5.99 5.99 0 014.242 1.768z" />
    <path d="M2.022 1a5 5 0 015 5h-1a4 4 0 00-4-4h-2V1h2z" fill="#fff" />
  </svg>
);

export default SvgComponent;