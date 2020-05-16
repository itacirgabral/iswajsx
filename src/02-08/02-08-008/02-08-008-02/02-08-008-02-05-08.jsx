import React from "react";

const SvgComponent = (props) => (
  <svg width={24} height={18} {...props}>
    <path d="M24 6v9.192L14.808 6H24zm-.994.994l-5.768.022 5.746 5.746.022-5.768z" />
    <path d="M19.757 10.95l-4.242 4.242c-2.734 2.734-6.533 3.367-8.486 1.415L3.494 13.07a9 9 0 010-12.728l7.778 7.778c-2.343 2.343-3.293 5.193-2.121 6.364a4 4 0 005.657 0l4.242-4.242.707.707z" />
    <path d="M23.006 6.994l-.022 5.768-5.746-5.746 5.768-.022z" fill="#fff" />
  </svg>
);

export default SvgComponent;
