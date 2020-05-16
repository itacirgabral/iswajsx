import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={26} {...props}>
    <path d="M1.494 9.343c5.077-5.077 13.308-5.077 18.385 0l-.707.707c-4.687-4.686-12.285-4.686-16.971 0L.787 11.464l-.707-.707 1.414-1.414z" />
    <path d="M12 19V0h-2v19h2z" />
    <path
      d="M2.201 10.05c4.686-4.686 12.284-4.686 16.97 0l-2.12 2.122a9 9 0 00-12.729 0l-1.414 1.414-2.121-2.122L2.2 10.05z"
      fill="#fff"
    />
    <path d="M4.322 12.172a9 9 0 0112.728 0l-.707.707a8 8 0 00-11.314 0l-1.414 1.414-.707-.707 1.414-1.414z" />
    <path d="M14.222 15H22V7.222L14.222 15zM4 19h14l-7 7-7-7z" />
  </svg>
);

export default SvgComponent;
