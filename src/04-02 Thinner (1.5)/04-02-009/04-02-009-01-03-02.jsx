import React from "react";

const SvgComponent = (props) => (
  <svg width={11} height={11} {...props}>
    <path d="M4.504 10.342L.968 6.806l.707-.707 2.829 2.828L7.332 6.1l.707.707-3.535 3.536zM6.183 3.182A4.006 4.006 0 004.99 6.01h1.016a3.009 3.009 0 013.005-3.005H11l.022-.994-2.01-.022c-1.105 0-2.105.47-2.83 1.193z" />
    <path d="M4.769 1.768A5.99 5.99 0 003 6.01h1.016a4.99 4.99 0 014.994-4.994H11V0H9.011A5.99 5.99 0 004.77 1.768z" />
    <path d="M9 1a5 5 0 00-5 5h1a4 4 0 014-4h2V1H9z" fill="#fff" />
  </svg>
);

export default SvgComponent;
