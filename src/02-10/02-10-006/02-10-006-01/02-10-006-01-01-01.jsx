import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M12 6c-2.761 0-5 3.134-5 7s2.239 7 5 7 5-3.134 5-7-2.239-7-5-7zm0 1.5v11c-1.933 0-3.5-2.462-3.5-5.5s1.567-5.5 3.5-5.5z" />
    <path d="M12 18.5a3.5 5.5 0 110-11V13z" fill="#fff" />
    <path d="M0 10V2l8 8H0zM11 0C9.209 0 7.43.696 6.062 2.063L3.22 5.219l1.375 1.375 2.875-3.125a4.978 4.978 0 017.062 0l2.063 2.312L18 4.375l-2.063-2.313A6.963 6.963 0 0011 0z" />
  </svg>
);

export default SvgComponent;
