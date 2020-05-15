import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 2C26.06 2 33 8.94 33 17.5 33 26.06 26.06 33 17.5 33 8.94 33 2 26.06 2 17.5 2 8.94 8.94 2 17.5 2z" />
    <path d="M14 20c-2.216 0-4 1.784-4 4 0 3.324 2.676 6 6 6h3c3.324 0 6-2.676 6-6 0-2.216-1.784-4-4-4h-7zm0 2v4c-1.108 0-2-.892-2-2s.892-2 2-2zm1 0h2v4h-2v-4zm3 0h2v4h-2v-4zm3 0c1.108 0 2 .892 2 2s-.892 2-2 2v-4z" />
  </svg>
);

export default SvgComponent;
