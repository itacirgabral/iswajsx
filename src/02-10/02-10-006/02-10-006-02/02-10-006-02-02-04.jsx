import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M15 14c2.761 0 5-3.134 5-7s-2.239-7-5-7-5 3.134-5 7 2.239 7 5 7zm0-1.5v-11c1.933 0 3.5 2.462 3.5 5.5s-1.567 5.5-3.5 5.5z" />
    <path
      d="M15 1.5v11c1.933 0 3.5-2.462 3.5-5.5S16.933 1.5 15 1.5z"
      fill="#fff"
    />
    <path d="M11 10l-8 8v-8h8zm-2.406 1H4v4.563L8.594 11zM14 20a6.963 6.963 0 01-4.938-2.063L6.22 14.781l1.375-1.375 2.875 3.125a4.978 4.978 0 007.062 0l2.063-2.312L21 15.625l-2.063 2.313A6.963 6.963 0 0114 20z" />
    <path d="M8.594 11L4 15.563V11h4.594z" fill="#fff" />
    <path d="M8 7l-8 8V7h8zM5.594 8H1v4.563L5.594 8z" />
    <path d="M5.594 8L1 12.563V8h4.594z" fill="#fff" />
  </svg>
);

export default SvgComponent;
