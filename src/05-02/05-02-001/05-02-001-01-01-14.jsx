import React from "react";

const SvgComponent = (props) => (
  <svg width={57} height={32} {...props}>
    <path d="M55.281 0L57 1 39.094 32H0v-2h37.938L55.28 0z" />
    <path
      d="M55.281 0L37.938 30H0v-1h37.375l16.75-29h1.156zM57 1v2L40.25 32h-1.156L57 1z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
