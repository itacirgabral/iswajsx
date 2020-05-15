import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 5c0 7.18 5.82 13 13 13v-1C6.373 17 1 11.627 1 5V3H0v2z" />
    <path d="M1 5c0 6.627 5.373 12 12 12v-3a9 9 0 01-9-9V3H1v2z" fill="#fff" />
    <path d="M14.85 5.565L1.413 19 0 17.586 13.435 4.151l1.414 1.414z" />
    <path d="M4 5a9 9 0 009 9v-1a8 8 0 01-8-8V3H4v2zM13 10v11l5.5-5.5L13 10zm.994 2.408l3.093 3.092-3.07 3.07-.023-6.162zM19 9.9V0H9.1L19 9.9zm-1.016-2.431L11.53 1.016h6.453V7.47z" />
    <path
      d="M17.984 7.469V1.016H11.53l6.453 6.453zM13.994 12.408l.022 6.162 3.07-3.07-3.092-3.092z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
