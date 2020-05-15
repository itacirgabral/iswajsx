import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M13.5 0A8.5 8.5 0 005 8.5a8.501 8.501 0 005 7.75V19H7a7 7 0 00-7 7v24h2V26a5 5 0 015-5h13a5 5 0 015 5v24h2V26a7 7 0 00-7-7h-3v-2.75a8.501 8.501 0 005-7.75A8.5 8.5 0 0013.5 0zM6 24v17h3V24H6zm12 0v17h3V24h-3zM4 44v4h4.594A5.498 5.498 0 018 45.5c0-.525.082-1.02.219-1.5H4zm14.781 0c.137.48.219.975.219 1.5 0 .898-.212 1.751-.594 2.5H23v-4h-4.219z" />
    <path d="M13.5 41a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
  </svg>
);

export default SvgComponent;
