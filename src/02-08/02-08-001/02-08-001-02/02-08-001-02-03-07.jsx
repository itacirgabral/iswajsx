import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M2.13 2.201a6 6 0 018.485 0l7.071 7.071c2.108 2.108 8.486 2.829 8.486 2.829L19.1 19.17s-.72-6.377-2.829-8.485l-7.071-7.07a4 4 0 00-5.657 0 3 3 0 000 4.242l3.536 3.535-1.415 1.415L2.13 9.272a5 5 0 010-7.071z" />
    <path d="M16.272 22H29V9.272l-1.414 1.414v9.9h-9.9L16.272 22z" />
  </svg>
);

export default SvgComponent;
