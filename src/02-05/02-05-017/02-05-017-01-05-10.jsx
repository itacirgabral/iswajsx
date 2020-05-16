import React from "react";

const SvgComponent = (props) => (
  <svg width={29} height={30} {...props}>
    <path d="M10 5c0 7.18 5.82 13 13 13v-1c-6.627 0-12-5.373-12-12V3h-1v2z" />
    <path
      d="M11 5c0 6.627 5.373 12 12 12v-3a9 9 0 01-9-9V3h-3v2z"
      fill="#fff"
    />
    <path d="M14 5a9 9 0 009 9v-1a8 8 0 01-8-8V3h-1v2zM23 10v11l5.5-5.5L23 10zm.994 2.408l3.092 3.092-3.07 3.07-.022-6.162zM28 9.9V0h-9.9L28 9.9zm-1.016-2.431L20.53 1.016h6.453V7.47z" />
    <path
      d="M26.984 7.469V1.016H20.53l6.453 6.453zM23.994 12.408l.022 6.162 3.07-3.07-3.092-3.092z"
      fill="#fff"
    />
    <path d="M1 14c0 7.18 5.82 13 13 13v-1C7.373 26 2 20.627 2 14v-2H1v2z" />
    <path
      d="M2 14c0 6.627 5.373 12 12 12v-3a9 9 0 01-9-9v-2H2v2z"
      fill="#fff"
    />
    <path d="M24.042 5.373L1.414 28 0 26.586 22.627 3.958l1.415 1.415z" />
    <path d="M5 14a9 9 0 009 9v-1a8 8 0 01-8-8v-2H5v2zM14 19v11l5.5-5.5L14 19zm.994 2.408l3.092 3.092-3.07 3.07-.022-6.162z" />
    <path d="M14.994 21.408l.022 6.162 3.07-3.07-3.092-3.092z" fill="#fff" />
  </svg>
);

export default SvgComponent;
