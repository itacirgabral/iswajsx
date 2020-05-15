import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M23 11l7 7h-2l-5-5-5 5h-2l7-7z" />
    <path d="M34 0v18a5 5 0 01-5 5h-3c-3.314 0-6-2.239-6-5h6a3 3 0 006 0V0h2z" />
    <path d="M0 12v1h19v-1H0zm27 0v1h12v-1H27zM14 0l7 7h-2l-5-5-5 5H7l7-7z" />
    <path d="M15 7v12a4 4 0 01-4 4H9c-3.866 0-7-2.686-7-6h7c0 2.21.895 4 2 4a2 2 0 002-2V7h2z" />
  </svg>
);

export default SvgComponent;