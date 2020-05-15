import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M6.364 3.536l16.263 16.263.708-.707L7.07 2.828l-.707.708zM2.828 7.071l16.264 16.264.707-.708L3.536 6.364l-.708.707z" />
    <path d="M8 19c0-6.075 4.925-11 11-11v1C13.477 9 9 13.477 9 19v2H8v-2z" />
    <path
      d="M3.536 6.364l16.263 16.263 2.828-2.828L6.364 3.536 3.536 6.364z"
      fill="#fff"
    />
    <path d="M18.998 14.002V2.998L24.5 8.5l-5.502 5.502zm.994-2.408L23.086 8.5l-3.072-3.071-.022 6.165zM0 9.9V0h9.9L0 9.9zm1.016-2.431L7.47 1.016H1.016V7.47z" />
    <path
      d="M1.016 7.469V1.016H7.47L1.016 7.47zM19.992 11.594l.022-6.165L23.086 8.5l-3.094 3.094z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;