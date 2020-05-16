import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={21} {...props}>
    <path d="M14 15c0-2.761-3.134-5-7-5s-7 2.239-7 5 3.134 5 7 5 7-2.239 7-5zm-1.5 0h-11c0-1.933 2.462-3.5 5.5-3.5s5.5 1.567 5.5 3.5z" />
    <path d="M1.5 15a3.5 5.5 90 1111 0H7z" fill="#fff" />
    <path d="M10 3h8l-8 8V3zM20 14c0-1.791-.696-3.57-2.063-4.938L14.781 6.22l-1.375 1.375 3.125 2.875a4.978 4.978 0 010 7.062l-2.312 2.063L15.625 21l2.313-2.063A6.963 6.963 0 0020 14z" />
    <path d="M7 0h8L7 8V0z" />
  </svg>
);

export default SvgComponent;
