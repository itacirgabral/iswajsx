import React from "react";

const SvgComponent = (props) => (
  <svg width={28} height={48} {...props}>
    <path d="M13.5 0A8.5 8.5 0 005 8.5a8.501 8.501 0 005 7.75V19H7a7 7 0 00-7 7v22h2V26a5 5 0 015-5h15v-2h-5v-2.75a8.501 8.501 0 005-7.75A8.5 8.5 0 0013.5 0zM6 25v16h3V25H6zm12 0v16h3V25h-3zM4 44v4h19v-4H4zM23 25v13h1v-2c2.21 0 4-2.015 4-4.5S26.21 27 24 27v-2h-1zm1 3.5c1.38 0 2.5 1.343 2.5 3s-1.12 3-2.5 3v-6z" />
    <path d="M24 28.5v6c1.38 0 2.5-1.343 2.5-3s-1.12-3-2.5-3z" fill="#fff" />
  </svg>
);

export default SvgComponent;
