import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M13.5 0A8.5 8.5 0 005 8.5a8.501 8.501 0 005 7.75V19H7a7 7 0 00-7 7v22h2V26a5 5 0 015-5h13a5 5 0 015 5v22h2V26a7 7 0 00-7-7h-3v-2.75a8.501 8.501 0 005-7.75A8.5 8.5 0 0013.5 0zM6 25v16h2.25c-.135-.479-.25-.978-.25-1.5 0-1.179.369-2.261 1-3.156V25H6zm12 0v11.344c.631.895 1 1.977 1 3.156 0 .522-.115 1.021-.25 1.5H21V25h-3zM4 44v4h19v-4H4z" />
    <path d="M13.5 35a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6z" />
    <path d="M13.5 36.5a3 3 0 110 6 3 3 0 010-6z" fill="#fff" />
  </svg>
);

export default SvgComponent;
