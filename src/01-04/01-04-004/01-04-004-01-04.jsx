import React from "react";

const SvgComponent = (props) => (
  <svg width={14} height={22} {...props}>
    <path d="M7 0L0 7v15h14V7L7 0z" />
    <path
      d="M7 2.813l-5 5.03V8H0v3h2v9h10v-9h2V8h-2v-.156L7 2.812z"
      fill="#fff"
    />
    <path d="M5 13h7v3H5z" />
  </svg>
);

export default SvgComponent;
