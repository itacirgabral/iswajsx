import React from "react";

const SvgComponent = (props) => (
  <svg width={39} height={33} {...props}>
    <path d="M1.523 2.594a6 6 0 018.486 0l6.364 6.364 7.778 7.779 3.535 3.535c2.108 2.108 8.486 2.829 8.486 2.829L29.1 30.17s-.72-6.377-2.829-8.485l-1.105-1.105a3.99 3.99 0 01-1.016 1.812 4 4 0 11-5.657-5.656 3.99 3.99 0 011.812-1.017l-2.917-2.917a3.99 3.99 0 01-1.016 1.812 4 4 0 01-5.657-5.657 3.99 3.99 0 011.812-1.016L8.594 4.009a4 4 0 00-5.656 0 3 3 0 000 4.242l2.12 2.122-1.413 1.414-2.122-2.122a5 5 0 010-7.07zm10.607 7.779a2 2 0 102.828 2.828 2 2 0 00-2.828-2.828zm7.778 7.778a2 2 0 102.829 2.828 2 2 0 00-2.829-2.828z" />
    <path d="M39 20.272V33H26.272l1.414-1.414h9.9v-9.9L39 20.272z" />
  </svg>
);

export default SvgComponent;
