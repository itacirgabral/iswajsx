import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={35} {...props}>
    <path d="M13 7v28h1V7h-1zM8 7v28h1V7H8z" />
    <path d="M9 7v28h4V7H9z" fill="#fff" />
    <path d="M4 7l7-7 7 7h-2.844L11 2.844 6.844 7H4zM0 13.219V21h7.781l-1-1H1v-5.781l-1-1z" />
    <path d="M20.506 15.343c-5.077-5.077-13.308-5.077-18.385 0l.707.707c4.687-4.686 12.285-4.686 16.971 0l1.414 1.414.707-.707-1.414-1.414z" />
    <path
      d="M19.799 16.05c-4.686-4.686-12.284-4.686-16.97 0l2.12 2.122a9 9 0 0112.729 0l1.414 1.414 2.121-2.122L19.8 16.05z"
      fill="#fff"
    />
    <path d="M17.678 18.172a9 9 0 00-12.728 0l.707.707a8 8 0 0111.314 0l1.414 1.414.707-.707-1.414-1.414zM22 24.219V32h-7.781l1-1H21v-5.781l1-1z" />
    <path d="M1.494 26.343c5.077-5.077 13.308-5.077 18.385 0l-.707.707c-4.687-4.686-12.285-4.686-16.971 0L.787 28.464l-.707-.707 1.414-1.414z" />
    <path
      d="M2.201 27.05c4.686-4.686 12.284-4.686 16.97 0l-2.12 2.122a9 9 0 00-12.729 0l-1.414 1.414-2.121-2.122L2.2 27.05z"
      fill="#fff"
    />
    <path d="M4.322 29.172a9 9 0 0112.728 0l-.707.707a8 8 0 00-11.314 0l-1.414 1.414-.707-.707 1.414-1.414z" />
  </svg>
);

export default SvgComponent;
