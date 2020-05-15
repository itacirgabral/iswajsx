import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 0L6.5 1.5h-5v5L0 8V0h8z" />
    <path d="M20.938 1l-3 3C16.352 5.585 13.91 6 11.5 6s-4.852-.416-6.438-2l-.53-.531L3.468 4.53 5.5 6.5a8.45 8.45 0 006 2.5c2.344 0 4.459-.968 6-2.5L22 2.062 20.937 1z" />
  </svg>
);

export default SvgComponent;