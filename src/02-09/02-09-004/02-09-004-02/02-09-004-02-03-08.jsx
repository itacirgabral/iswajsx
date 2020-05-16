import React from "react";

const SvgComponent = (props) => (
  <svg width={31} height={29} {...props}>
    <path d="M7 13L.5 6.5 7 0v1.857L2.357 6.5 7 11.143V13zM7 6v1h6.5a3.5 3.5 0 013.5 3.5c0 1.765-1.301 3.26-3 3.5a6 6 0 000 12h4a4.01 4.01 0 002.844-1.156L24 22c.53-.623 1.237-1 2-1 1.657 0 3 1.79 3 4v4h2v-4a5 5 0 00-5-5c-1.131.158-1.937.38-3.125 1.063l-2.5 1.312C19.82 22.666 18.318 23 18 23h-5a3 3 0 010-6h.5a5.5 5.5 0 000-11H7z" />
  </svg>
);

export default SvgComponent;
