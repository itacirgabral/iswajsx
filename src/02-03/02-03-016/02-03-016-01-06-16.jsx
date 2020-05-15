import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6.364 3.536l16.263 16.263.708-.707L7.07 2.828l-.707.708z" />
    <path d="M0 9.9V0h9.9L7.888 2.01H2.01V7.89L0 9.899z" />
    <path d="M2.828 7.071l16.264 16.264.707-.708L3.536 6.364l-.708.707zM23.01 6.99l-5.503-5.502-5.502 5.502h1.414l4.088-4.088 4.088 4.088h1.414z" />
    <path
      d="M3.536 6.364l16.263 16.263 2.828-2.828L6.364 3.536 3.536 6.364z"
      fill="#fff"
    />
    <path d="M5 17l2.01-.022c2.269-.238 4.546-1.806 6.365-3.624 1.818-1.819 3.386-4.096 3.624-6.364h1.016a10.97 10.97 0 01-3.226 7.778 10.97 10.97 0 01-7.778 3.226H5.022L5 17z" />
  </svg>
);

export default SvgComponent;