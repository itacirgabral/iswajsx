import React from "react";

const SvgComponent = (props) => (
  <svg width={30} height={17} {...props}>
    <path d="M30 7.1V17h-9.9l1.415-1.414h7.07V8.515L30 7.1z" />
    <path d="M1.716 1.444a4 4 0 015.657 0l3.933 3.933c.176-.66.498-1.294 1.016-1.812a4 4 0 015.657 0l2.829 2.828c1.795 1.795 7.07 2.829 7.07 2.829l-5.656 5.657s-1.034-5.276-2.829-7.071l-2.828-2.829a2 2 0 00-2.828 2.829l2.12 2.12-1.413 1.415-8.486-8.485A2 2 0 003.13 5.686l3.535 3.536-1.414 1.414-3.535-3.535a4 4 0 010-5.657z" />
  </svg>
);

export default SvgComponent;
