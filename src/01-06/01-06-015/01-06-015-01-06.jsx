import React from "react";

const SvgComponent = (props) => (
  <svg width={21} height={20} {...props}>
    <path d="M8 4a8 8 0 110 16A8 8 0 018 4z" />
    <path
      d="M.25 10a8.054 8.054 0 00-.188 3h15.876a8.054 8.054 0 00-.188-3H.25z"
      fill="#fff"
    />
    <path d="M18.156 0L21 2.813l-5.781 5.78A7.995 7.995 0 0012.656 5.5l5.5-5.5z" />
  </svg>
);

export default SvgComponent;
