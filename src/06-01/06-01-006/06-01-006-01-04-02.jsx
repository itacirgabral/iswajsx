import React from "react";

const SvgComponent = (props) => (
  <svg width={27} height={48} {...props}>
    <path d="M13.5 0A8.5 8.5 0 005 8.5a8.501 8.501 0 005 7.75V19H7a7 7 0 00-7 7v22h2V26a5 5 0 015-5h13a5 5 0 015 5v22h2V26a7 7 0 00-7-7h-3v-2.75a8.501 8.501 0 005-7.75A8.5 8.5 0 0013.5 0zM6 25v9.219c.48-.138.976-.219 1.5-.219.525 0 1.02.082 1.5.219V25H6zm12 0v16h3V25h-3zM4 44v4h19v-4H10.656c-.895.631-1.977 1-3.156 1a5.433 5.433 0 01-3.156-1H4z" />
    <path d="M7.5 35a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6z" />
    <path d="M7.5 36.5a3 3 0 110 6 3 3 0 010-6z" fill="#fff" />
  </svg>
);

export default SvgComponent;
