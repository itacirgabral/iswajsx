import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M13 7v19h1V7h-1zM8 7v19h1V7H8z" />
    <path d="M9 7v19h4V7H9z" fill="#fff" />
    <path d="M4 7l7-7 7 7h-2.844L11 2.844 6.844 7H4zM0 18.781V11h7.781l-1 1H1v5.781l-1 1z" />
    <path d="M20.506 16.657c-5.077 5.077-13.308 5.077-18.385 0l.707-.707c4.687 4.686 12.285 4.686 16.971 0l1.414-1.414.707.707-1.414 1.414z" />
    <path
      d="M19.799 15.95c-4.686 4.686-12.284 4.686-16.97 0l2.12-2.122a9 9 0 0012.729 0l1.414-1.414 2.121 2.122L19.8 15.95z"
      fill="#fff"
    />
    <path d="M17.678 13.828a9 9 0 01-12.728 0l.707-.707a8 8 0 0011.314 0l1.414-1.414.707.707-1.414 1.414z" />
  </svg>
);

export default SvgComponent;
