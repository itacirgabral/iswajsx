import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M25 0l8 8h-2l-6-6-6 6h-2l8-8zM26 8v14a5 5 0 01-5 5 4.978 4.978 0 01-3.531-1.469L11.75 20.25c-.343-.456-1.002-.75-1.75-.75-1.105 0-2 .672-2 1.5v8c0 4.177 6 11 6 11H0s6-6.823 6-11v-8a5 5 0 015-5c1.38 0 2.626.564 3.531 1.469l5.719 5.281c.343.456 1.002.75 1.75.75 1.105 0 2-.672 2-1.5V8h2z" />
  </svg>
);

export default SvgComponent;
