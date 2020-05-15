import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M12 35H2V25l10 10z" />
    <path d="M9.125 32.125l-1.063-1.063 3.688-3.687a5.98 5.98 0 000-8.469l-2.125-2.125 2.125-2.125a6.018 6.018 0 000-8.5L6.625 1.063 7.688 0l5.125 5.094c2.928 2.929 2.928 7.696 0 10.625L11.75 16.78l1.063 1.063a7.484 7.484 0 010 10.593l-3.688 3.688z" />
    <path d="M5.938 28.938l-1.063-1.063 3.688-3.688a1.504 1.504 0 000-2.125l-5.313-5.28 1.063-1.063 4.25-4.25a1.504 1.504 0 000-2.125L3.436 4.25 4.5 3.187l5.125 5.094a3.009 3.009 0 010 4.25l-4.25 4.25L9.625 21a3.009 3.009 0 010 4.25l-3.688 3.688z" />
    <path
      d="M8.063 31.063l-2.126-2.125 3.688-3.688a3.009 3.009 0 000-4.25l-4.25-4.219 4.25-4.25a3.009 3.009 0 000-4.25L4.5 3.187l2.125-2.124 5.125 5.093a6.018 6.018 0 010 8.5l-2.125 2.125 2.125 2.125a5.98 5.98 0 010 8.469l-3.688 3.688z"
      fill="#fff"
    />
    <path d="M0 24v-2h18v2H0zM0 11V9h18v2H0z" />
  </svg>
);

export default SvgComponent;
