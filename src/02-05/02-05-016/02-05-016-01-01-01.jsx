import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 7v19h2V7h-2z" />
    <path d="M20.506 15.343c-5.077-5.077-13.308-5.077-18.385 0l.707.707c4.687-4.686 12.285-4.686 16.971 0l1.414 1.414.707-.707-1.414-1.414z" />
    <path
      d="M19.799 16.05c-4.686-4.686-12.284-4.686-16.97 0l2.12 2.122a9 9 0 0112.729 0l1.414 1.414 2.121-2.122L19.8 16.05z"
      fill="#fff"
    />
    <path d="M17.678 18.172a9 9 0 00-12.728 0l.707.707a8 8 0 0111.314 0l1.414 1.414.707-.707-1.414-1.414zM7.778 21H0v-7.778L7.778 21zM18 7H4l7-7 7 7z" />
  </svg>
);

export default SvgComponent;