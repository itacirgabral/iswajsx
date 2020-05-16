import React from "react";

const SvgComponent = (props) => (
  <svg width={20} height={23} {...props}>
    <path d="M.719 0L0 .719 19.281 20l.719-.719L.719 0zM.5 16l7 7 7-7H.5zm2.438 1h9.124L7.5 21.594 2.937 17z" />
    <path d="M14.5 9a5.467 5.467 0 00-3.875 1.625A5.467 5.467 0 009 14.5V16h1v-1.5c0-1.151.434-2.309 1.313-3.188A4.493 4.493 0 0114.5 10H20V9h-5.5z" />
    <path
      d="M14.5 6c-2.175 0-4.34.84-6 2.5a8.462 8.462 0 00-2.5 6V16h3v-1.5c0-1.407.551-2.801 1.625-3.875A5.467 5.467 0 0114.5 9H20V6h-5.5z"
      fill="#fff"
    />
    <path d="M14.5 5c-2.43 0-4.864.927-6.719 2.781A9.473 9.473 0 005 14.5V16h1v-1.5c0-2.175.84-4.34 2.5-6a8.462 8.462 0 016-2.5H20V5h-5.5z" />
    <path d="M2.938 17L7.5 21.594 12.063 17H2.937z" fill="#fff" />
  </svg>
);

export default SvgComponent;
