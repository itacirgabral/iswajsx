import React from "react";

const SvgComponent = (props) => (
  <svg width={16} height={25} {...props}>
    <path d="M16 11h-2l-3.5 3.5L7 11H5l5.5 5.5L16 11z" />
    <path d="M6.5 25c2.304 0 4.173-3.281 4.438-7.5h-1.97C8.804 21.161 7.767 24 6.5 24 5.12 24 4 20.642 4 16.5v-8C4 4.358 5.12 1 6.5 1S9 4.358 9 8.5V10h2V8.5C11 3.806 8.985 0 6.5 0h-2C2.015 0 0 3.806 0 8.5v8C0 21.194 2.015 25 4.5 25h2z" />
  </svg>
);

export default SvgComponent;
