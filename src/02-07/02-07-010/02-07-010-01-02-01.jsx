import React from "react";

const SvgComponent = (props) => (
  <svg width={13} height={35} {...props}>
    <path d="M0 0v10L10 0H0zm1 1h6.594L1 7.563V1z" />
    <path d="M7.125 2.875L6.062 3.938 9.75 7.624a5.98 5.98 0 010 8.469l-2.125 2.125 2.125 2.125a6.018 6.018 0 010 8.5l-5.125 5.093L5.688 35l5.125-5.094c2.928-2.929 2.928-7.696 0-10.625L9.75 18.22l1.063-1.063a7.484 7.484 0 000-10.593L7.124 2.874z" />
    <path d="M3.938 6.063L2.875 7.125l3.688 3.688c.585.585.585 1.539 0 2.124L1.25 18.22l1.063 1.062 4.25 4.25c.585.586.585 1.54 0 2.125L1.438 30.75 2.5 31.813l5.125-5.094a3.009 3.009 0 000-4.25l-4.25-4.25L7.625 14a3.009 3.009 0 000-4.25L3.937 6.062z" />
    <path
      d="M6.063 3.938L3.938 6.062 7.624 9.75a3.009 3.009 0 010 4.25l-4.25 4.219 4.25 4.25a3.009 3.009 0 010 4.25L2.5 31.812l2.125 2.125 5.125-5.093a6.018 6.018 0 000-8.5l-2.125-2.125 2.125-2.125a5.98 5.98 0 000-8.469L6.062 3.937zM1 1v6.563L7.594 1H1z"
      fill="#fff"
    />
    <path d="M10 9a3 3 0 100 6 3 3 0 000-6zM10 22a3 3 0 100 6 3 3 0 000-6z" />
  </svg>
);

export default SvgComponent;
