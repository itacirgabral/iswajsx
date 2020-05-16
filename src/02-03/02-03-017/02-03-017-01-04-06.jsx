import React from "react";

const SvgComponent = (props) => (
  <svg width={28} height={30} {...props}>
    <path d="M22 19l5.5-5.5L22 8v11zM28 20.1L18.1 30H28v-9.9z" />
    <path d="M20.929 27.172L.423 6.665l.707-.707 20.506 20.506-.707.708z" />
    <path d="M11 24c0-6.075 4.925-11 11-11v1c-5.523 0-10 4.477-10 10v2h-1v-2z" />
    <path d="M24.464 23.636L3.958 3.13l.707-.707 20.507 20.506-.708.707zM14 11l5.5-5.5L14 0v11z" />
    <path d="M3 16C3 9.925 7.925 5 14 5v1C8.477 6 4 10.477 4 16v2H3v-2z" />
    <path
      d="M21.636 26.464L1.13 5.958 3.958 3.13l20.506 20.506-2.828 2.828z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
