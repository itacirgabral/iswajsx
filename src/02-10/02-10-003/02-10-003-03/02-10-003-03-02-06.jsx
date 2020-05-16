import React from "react";

const SvgComponent = (props) => (
  <svg width={32} height={33} {...props}>
    <path d="M7.222 21H15v-7.778L7.222 21zm2.43-1.016l4.332-4.331v4.33H9.653z" />
    <path d="M30.91 29.839c1.757-1.758.49-5.873-2.829-9.193L11.818 4.383c-3.32-3.32-7.435-4.586-9.192-2.828L1.21 2.969c-1.757 1.757-1.198 6.58 2.122 9.9l5.303 5.303 3.536-3.536-5.304-5.303C3.94 6.403 3.064 3.945 4.04 2.969c.976-.977 3.435-.1 6.364 2.828l16.263 16.264c2.93 2.929 3.805 5.387 2.829 6.364-.977.976-3.435.1-6.364-2.829l-5.657-5.657-3.536 3.536 5.657 5.657c3.32 3.32 8.142 3.878 9.9 2.121l1.414-1.414z" />
    <path d="M9.653 19.984h4.33v-4.331l-4.33 4.33z" fill="#fff" />
  </svg>
);

export default SvgComponent;
