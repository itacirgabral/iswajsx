import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7 0L.5 6.5 7 13V0zM6 2.438v8.124L1.906 6.5 6 2.437zM7 6v1h6.5a3.5 3.5 0 013.5 3.5c0 1.765-1.301 3.26-3 3.5a6 6 0 000 12h4a4.01 4.01 0 002.844-1.156L24 22c.53-.623 1.237-1 2-1 1.657 0 3 1.79 3 4v4h2v-4a5 5 0 00-5-5c-1.131.158-1.937.38-3.125 1.063l-2.5 1.312C19.82 22.666 18.318 23 18 23h-5a3 3 0 010-6h.5a5.5 5.5 0 000-11H7z" />
    <path d="M6 2.438L1.906 6.5 6 10.563V2.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;