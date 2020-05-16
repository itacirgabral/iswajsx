import React from "react";

const SvgComponent = (props) => (
  <svg width={22} height={36} {...props}>
    <path d="M7.778 24H0v-7.778L7.778 24zM18 29H4l7 7 7-7zM8 29V0h1v29H8z" />
    <path d="M19.092 19.757c-4.296-4.295-11.26-4.295-15.556 0l.707.707c3.905-3.905 10.237-3.905 14.142 0l1.414 1.415.707-.707-1.414-1.415z" />
    <path d="M13 29V0h1v29h-1zM14.222 13H22V5.222L14.222 13z" />
    <path d="M2.908 8.757c4.296-4.295 11.26-4.295 15.556 0l-.707.707C13.852 5.56 7.52 5.56 3.615 9.464L2.201 10.88l-.707-.707 1.414-1.415z" />
    <path d="M9 29V0h4v29H9z" fill="#fff" />
  </svg>
);

export default SvgComponent;
