import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M13.222 24H21v-7.778L13.222 24zM17 29H3l7 7 7-7zM7 29V0h1v29H7z" />
    <path d="M1.908 19.757c4.296-4.295 11.26-4.295 15.556 0l-.707.707c-3.905-3.905-10.237-3.905-14.142 0L1.201 21.88l-.707-.707 1.414-1.415z" />
    <path d="M12 29V0h1v29h-1zM13.222 13H21V5.222L13.222 13z" />
    <path d="M1.908 8.757c4.296-4.295 11.26-4.295 15.556 0l-.707.707C12.852 5.56 6.52 5.56 2.615 9.464L1.201 10.88l-.707-.707 1.414-1.415z" />
    <path d="M8 29V0h4v29H8z" fill="#fff" />
  </svg>
);

export default SvgComponent;
