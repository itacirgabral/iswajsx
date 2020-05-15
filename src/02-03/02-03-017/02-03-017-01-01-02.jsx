import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M11 16l-5.5 5.5L0 16h11zM9.9 0L0 9.9V0h9.9z" />
    <path d="M2.828 7.071l20.507 20.506.707-.707L3.536 6.364l-.708.707z" />
    <path d="M16 5C9.925 5 5 9.925 5 16h1c0-5.523 4.477-10 10-10h2V5h-2zM19 24l-5.5 5.5L8 24h11z" />
    <path d="M6.364 3.536L26.87 24.042l.707-.707L7.071 2.828l-.707.708z" />
    <path d="M24 13c-6.075 0-11 4.925-11 11h1c0-5.523 4.477-10 10-10h2v-1h-2z" />
    <path
      d="M3.536 6.364L24.042 26.87l2.828-2.828L6.364 3.536 3.536 6.364z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
