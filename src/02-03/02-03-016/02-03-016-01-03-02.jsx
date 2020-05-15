import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6.364 3.536l16.263 16.263.708-.707L7.07 2.828l-.707.708z" />
    <path d="M0 9.9V0h9.9L7.888 2.01H2.01V7.89L0 9.899z" />
    <path d="M2.828 7.071l16.264 16.264.707-.708L3.536 6.364l-.708.707zM2.998 18.998L8.5 24.5l5.502-5.502h-1.414L8.5 23.086l-4.088-4.088H2.998z" />
    <path d="M19 8C12.925 8 8 12.925 8 19h1c0-5.523 4.477-10 10-10h2V8h-2z" />
    <path
      d="M3.536 6.364l16.263 16.263 2.828-2.828L6.364 3.536 3.536 6.364z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;