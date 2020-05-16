import React from "react";

const SvgComponent = (props) => (
  <svg width={33} height={32} {...props}>
    <path d="M24 16V8.222L16.222 16H24zm-1.016-1.016h-4.331l4.33-4.331v4.33z" />
    <path d="M31.425 29.081c1.757-1.757.49-5.872-2.829-9.192l-3.535-3.535-1.415 1.414 3.536 3.535c2.929 2.93 3.805 5.388 2.828 6.364-.976.977-4.142.808-7.07-2.121L6.675 9.282c-2.929-2.928-3.098-6.094-2.121-7.07.976-.977 3.435-.101 6.364 2.828L14.1 8.222l1.414-1.414-3.182-3.182C9.013.306 4.898-.96 3.14.797L1.726 2.211C-.03 3.97.528 8.791 3.847 12.111l16.264 16.263c3.32 3.32 8.142 3.88 9.9 2.122l1.414-1.415z" />
    <path d="M22.984 14.984v-4.331l-4.331 4.33h4.33z" fill="#fff" />
    <path d="M20 12V4.222L12.222 12H20zm-1.016-1.016h-4.331l4.33-4.331v4.33z" />
    <path d="M18.984 10.984V6.653l-4.331 4.33h4.33z" fill="#fff" />
  </svg>
);

export default SvgComponent;
