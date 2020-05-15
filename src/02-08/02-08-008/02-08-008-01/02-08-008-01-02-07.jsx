import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17 3h9.9L17 12.9V3zm.994.994l.022 6.475 6.453-6.453-6.475-.022z" />
    <path d="M1.444.172L16.293 15.02a3 3 0 004.243 0c1.171-1.172.855-3.388-.708-4.95l4.243-4.243a6 6 0 010 8.486l-2.121 2.121a5 5 0 01-7.071 0L.029 1.585 1.444.173z" />
    <path d="M17.994 3.994l6.475.022-6.453 6.453-.022-6.475z" fill="#fff" />
  </svg>
);

export default SvgComponent;
