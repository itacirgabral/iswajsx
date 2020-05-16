import React from "react";

const SvgComponent = (props) => (
  <svg width={28} height={30} {...props}>
    <path d="M16 11l5.5-5.5L16 0v11zM9.9 0L0 9.9V0h9.9z" />
    <path d="M2.828 7.071l20.507 20.506.707-.707L3.536 6.364l-.708.707z" />
    <path d="M5 16C5 9.925 9.925 5 16 5v1C10.477 6 6 10.477 6 16v2H5v-2z" />
    <path d="M6.364 3.536L26.87 24.042l.707-.707L7.071 2.828l-.707.708zM19 24l-5.5 5.5L8 24h11z" />
    <path d="M24 13c-6.075 0-11 4.925-11 11h1c0-5.523 4.477-10 10-10h2v-1h-2z" />
    <path
      d="M3.536 6.364L24.042 26.87l2.828-2.828L6.364 3.536 3.536 6.364z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
