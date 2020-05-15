import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10.342 6.496l-3.536 3.536-.707-.707 2.828-2.829L6.1 3.668l.707-.707 3.536 3.535zM3.182 4.817A4.006 4.006 0 006.01 6.01V4.994a3.009 3.009 0 01-3.005-3.005V0l-.994-.022-.022 2.01c0 1.105.47 2.105 1.193 2.83z" />
    <path d="M1.768 6.231A5.99 5.99 0 006.01 8V6.983a4.99 4.99 0 01-4.994-4.994V0H0v1.989A5.99 5.99 0 001.768 6.23z" />
    <path d="M1 2a5 5 0 005 5V6a4 4 0 01-4-4V0H1v2z" fill="#fff" />
  </svg>
);

export default SvgComponent;
