import React from "react";

const SvgComponent = (props) => (
  <svg width={19} height={15} {...props}>
    <path d="M19 5v7.778L11.222 5H19zm-1.016 1.016h-4.331l4.33 4.331v-4.33z" />
    <path d="M15.464 9.243l-4.242 4.242a4 4 0 01-5.657 0l-2.828-2.828a7 7 0 010-9.9L9.1 7.121 7.686 8.536C6.515 9.707 6.198 11.29 6.98 12.07a3 3 0 004.243 0l3.535-3.535.707.707z" />
    <path d="M17.984 6.016v4.331l-4.331-4.33h4.33z" fill="#fff" />
  </svg>
);

export default SvgComponent;
