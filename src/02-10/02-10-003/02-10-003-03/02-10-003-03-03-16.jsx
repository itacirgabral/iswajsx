import React from "react";

const SvgComponent = (props) => (
  <svg width={33} height={32} {...props}>
    <path d="M19.781 17l-1.5 1.5H13.5v4.781l-1.5 1.5V17h7.781z" />
    <path d="M3.161 1.09C4.92-.667 9.034.6 12.354 3.92l16.263 16.263c3.32 3.32 4.586 7.435 2.828 9.192l-1.414 1.415c-1.757 1.757-6.58 1.198-9.9-2.122l-5.303-5.303 3.536-3.536 5.303 5.304c2.93 2.929 5.388 3.804 6.364 2.828.977-.976.1-3.435-2.828-6.364L10.939 5.333C8.01 2.403 5.552 1.528 4.575 2.504c-.976.977-.1 3.435 2.829 6.364l5.657 5.657-3.536 3.536-5.657-5.657c-3.32-3.32-3.878-8.142-2.121-9.9L3.161 1.09z" />
  </svg>
);

export default SvgComponent;
