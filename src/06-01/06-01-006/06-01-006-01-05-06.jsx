import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M13.5 0A8.5 8.5 0 0122 8.5a8.501 8.501 0 01-5 7.75V19h3a7 7 0 017 7v24h-2V26a5 5 0 00-5-5H7a5 5 0 00-5 5v24H0V26a7 7 0 017-7h3v-2.75A8.501 8.501 0 015 8.5 8.5 8.5 0 0113.5 0zM21 24v16.219A5.394 5.394 0 0019.5 40c-.525 0-1.02.082-1.5.219V24h3zM9 24v17H6V24h3zm5.219 20c-.137.48-.219.975-.219 1.5 0 .898.212 1.751.594 2.5H4v-4h10.219z" />
    <path d="M19.5 41a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
  </svg>
);

export default SvgComponent;
