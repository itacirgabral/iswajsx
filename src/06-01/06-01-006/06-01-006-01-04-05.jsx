import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M13.5 0A8.5 8.5 0 005 8.5a8.501 8.501 0 005 7.75V19H7a7 7 0 00-7 7v22h2V26a5 5 0 015-5h13a5 5 0 015 5v22h2V26a7 7 0 00-7-7h-3v-2.75a8.501 8.501 0 005-7.75A8.5 8.5 0 0013.5 0zM6 24v17h2.219A5.414 5.414 0 019 36.344V24H6zm12 0v12.344c.631.895 1 1.977 1 3.156 0 .525-.082 1.02-.219 1.5H21V24h-3zM4 44v4h19v-4h-6.344c-.895.631-1.977 1-3.156 1a5.441 5.441 0 01-3.156-1H4z" />
    <path d="M13.5 35a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
  </svg>
);

export default SvgComponent;
