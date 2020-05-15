import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M16 11l-7 7h2l5-5 5 5h2l-7-7z" />
    <path d="M5 0v18a5 5 0 005 5h3c3.314 0 6-2.239 6-5h-6a3 3 0 01-6 0V0H5z" />
    <path d="M39 12v1H20v-1h19zm-27 0v1H0v-1h12zM25 0l-7 7h2l5-5 5 5h2l-7-7z" />
    <path d="M24 7v12a4 4 0 004 4h2c3.866 0 7-2.686 7-6h-7c0 2.21-.895 4-2 4a2 2 0 01-2-2V7h-2z" />
  </svg>
);

export default SvgComponent;
