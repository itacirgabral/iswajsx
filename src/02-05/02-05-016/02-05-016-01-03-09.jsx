import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={26} {...props}>
    <path d="M12 7v19h-2V7h2zM18 7l-7-7-7 7h2.844L11 2.844 15.156 7H18zM22 13.219V21h-7.781l1-1H21v-5.781l1-1z" />
    <path d="M1.494 15.343c5.077-5.077 13.308-5.077 18.385 0l-.707.707c-4.687-4.686-12.285-4.686-16.971 0L.787 17.464l-.707-.707 1.414-1.414z" />
    <path
      d="M2.201 16.05c4.686-4.686 12.284-4.686 16.97 0l-2.12 2.122a9 9 0 00-12.729 0l-1.414 1.414-2.121-2.122L2.2 16.05z"
      fill="#fff"
    />
    <path d="M4.322 18.172a9 9 0 0112.728 0l-.707.707a8 8 0 00-11.314 0l-1.414 1.414-.707-.707 1.414-1.414z" />
  </svg>
);

export default SvgComponent;
