import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6.364 3.536L26.87 24.042l.707-.707L7.071 2.828l-.707.708z" />
    <path d="M0 9.9V0h9.9L7.888 2.01H2.01V7.89L0 9.899z" />
    <path d="M2.828 7.071l20.507 20.506.707-.707L3.536 6.364l-.708.707zM5.99 22.01L.488 16.506l5.502-5.502v1.414l-4.088 4.088 4.088 4.088v1.414z" />
    <path
      d="M3.536 6.364L24.042 26.87l2.828-2.828L6.364 3.536 3.536 6.364z"
      fill="#fff"
    />
    <path d="M16 4l-.022 2.01c-.238 2.269-1.806 4.546-3.624 6.365-1.819 1.818-4.096 3.386-6.364 3.624v1.016a10.97 10.97 0 007.778-3.226 10.97 10.97 0 003.226-7.778V4.022L16 4zM13.996 29.987l-5.503-5.502 5.503-5.502v1.414l-4.088 4.088 4.088 4.088v1.414zM24.006 11.978l-.022 2.01c-.238 2.269-1.806 4.546-3.624 6.365-1.819 1.818-4.096 3.386-6.364 3.624v1.016a10.97 10.97 0 007.778-3.226A10.97 10.97 0 0025 13.989V12l-.994-.022z" />
  </svg>
);

export default SvgComponent;
