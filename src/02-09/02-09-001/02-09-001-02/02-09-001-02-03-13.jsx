import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M11 0L9.5 1.5h-8v8L0 11V0h11z" />
    <path d="M16 12c-3.672 0-6.958-1.55-9.313-4L4.813 6.187l1.375-1.375 1.375 1.344C9.91 7.307 12.822 8 16 8c3.153 0 6.043-.677 8.375-1.813L27.594 3 29 4.406l-3.844 3.75C22.813 10.514 19.592 12 16 12z" />
  </svg>
);

export default SvgComponent;
