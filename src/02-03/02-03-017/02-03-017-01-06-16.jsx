import React from "react";

const SvgComponent = (props) => (
  <svg width={30} height={28} {...props}>
    <path d="M6.364 3.536L26.87 24.042l.707-.707L7.071 2.828l-.707.708z" />
    <path d="M0 9.9V0h9.9L7.888 2.01H2.01V7.89L0 9.899z" />
    <path d="M2.828 7.071l20.507 20.506.707-.707L3.536 6.364l-.708.707zM21.987 5.996L16.485.493l-5.502 5.503h1.414l4.088-4.088 4.088 4.088h1.414z" />
    <path
      d="M3.536 6.364L24.042 26.87l2.828-2.828L6.364 3.536 3.536 6.364z"
      fill="#fff"
    />
    <path d="M3.978 16.006l2.01-.022c2.269-.238 4.546-1.806 6.365-3.624 1.818-1.819 3.386-4.096 3.624-6.364h1.016a10.97 10.97 0 01-3.226 7.778A10.97 10.97 0 015.989 17H4l-.022-.994zM29.987 13.996l-5.502-5.503-5.502 5.503h1.414l4.088-4.088 4.088 4.088h1.414zM11.978 24.006l2.01-.022c2.269-.238 4.546-1.806 6.365-3.624 1.818-1.819 3.386-4.096 3.624-6.364h1.016a10.97 10.97 0 01-3.226 7.778A10.97 10.97 0 0113.989 25H12l-.022-.994z" />
  </svg>
);

export default SvgComponent;
