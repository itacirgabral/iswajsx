import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M13 18v-7.778L5.222 18H13zm-1.016-1.016H7.653l4.33-4.331v4.33z" />
    <path d="M25.02 23.657c1.953-1.953-.263-7.335-4.949-12.021l-6.364-6.364C9.411.976 4.504-1.08 2.747.676L1.333 2.09c-2.148 2.148.226 8.005 5.303 13.082l3.58-3.58C5.948 6.975 3.316 2.936 4.16 2.09c.976-.976 6.2 2.664 11.667 8.132 5.468 5.467 9.108 10.69 8.132 11.667-.776.776-4.244-1.405-8.375-5.06l-3.646 3.646c4.63 4.41 10.418 5.845 13.082 3.182z" />
    <path d="M11.984 16.984v-4.331l-4.331 4.33h4.33z" fill="#fff" />
  </svg>
);

export default SvgComponent;