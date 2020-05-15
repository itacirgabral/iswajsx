import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M13 29V0h1v29h-1z" />
    <path d="M19.092 19.757c-4.296-4.295-11.26-4.295-15.556 0l.707.707c3.905-3.905 10.237-3.905 14.142 0l1.414 1.415.707-.707-1.414-1.415z" />
    <path d="M8 29V0h1v29H8zM7.781 24L0 16.219V24h7.781zm-2.406-1H1v-4.344L5.375 23zM4 29l7 7 7-7H4zm2.438 1h9.125L11 34.563 6.437 30z" />
    <path
      d="M6.438 30L11 34.563 15.563 30H6.437zM5.375 23L1 18.656V23h4.375z"
      fill="#fff"
    />
    <path d="M2.908 8.757c4.296-4.295 11.26-4.295 15.556 0l-.707.707C13.852 5.56 7.52 5.56 3.615 9.464L2.201 10.88l-.707-.707 1.414-1.415z" />
    <path d="M9 29V0h4v29H9z" fill="#fff" />
    <path d="M14.219 13L22 5.219V13h-7.781zm2.406-1H21V7.656L16.625 12z" />
    <path d="M16.625 12L21 7.656V12h-4.375z" fill="#fff" />
  </svg>
);

export default SvgComponent;
