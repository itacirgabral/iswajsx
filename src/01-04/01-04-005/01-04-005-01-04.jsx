import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 0v22h14V0L7 7 0 0z" />
    <path
      d="M2 4.813V10H0v2h2v8h10v-8h2v-2h-2V4.812L7 9.845 2 4.813z"
      fill="#fff"
    />
    <path d="M5 14h7v3H5z" />
  </svg>
);

export default SvgComponent;