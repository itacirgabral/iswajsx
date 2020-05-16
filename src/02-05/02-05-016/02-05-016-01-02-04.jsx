import React from "react";

const SvgComponent = (props) => (
  <svg width={23} height={19} {...props}>
    <path d="M4 2c0 7.18 5.82 13 13 13v-1C10.373 14 5 8.627 5 2V0H4v2z" />
    <path d="M5 2c0 6.627 5.373 12 12 12v-3a9 9 0 01-9-9V0H5v2z" fill="#fff" />
    <path d="M5.565 14.85L19 1.413 17.586 0 4.151 13.435l1.414 1.414z" />
    <path d="M8 2a9 9 0 009 9v-1a8 8 0 01-8-8V0H8v2zM17 7v11l5.5-5.5L17 7zm.994 2.408l3.092 3.092-3.07 3.07-.022-6.162zM9.9 19H0V9.1L9.9 19zm-2.431-1.016L1.016 11.53v6.453H7.47z" />
    <path
      d="M7.469 17.984H1.016V11.53l6.453 6.453zM17.994 9.408l.022 6.162 3.07-3.07-3.092-3.092z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
