import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M13 0L5.5 7.5 13 15V0z" />
    <path d="M13 4v1.5h1c6.904 0 12.5 5.596 12.5 12.5v1c0 6.904-5.596 12.5-12.5 12.5S1.5 25.904 1.5 19v-1H0v1c0 7.732 6.268 14 14 14s14-6.268 14-14v-1c0-7.732-6.268-14-14-14h-1z" />
    <path
      d="M13 5.5v4h1a8.5 8.5 0 018.5 8.5v1a8.5 8.5 0 01-17 0v-1h-4v1c0 6.904 5.596 12.5 12.5 12.5S26.5 25.904 26.5 19v-1c0-6.904-5.596-12.5-12.5-12.5h-1z"
      fill="#fff"
    />
    <path d="M13 9.5V11h1a7 7 0 017 7v1a7 7 0 01-14 0v-1H5.5v1a8.5 8.5 0 0017 0v-1A8.5 8.5 0 0014 9.5h-1z" />
  </svg>
);

export default SvgComponent;
