import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M21 9.1L11.1 19H21V9.1z" />
    <path d="M1.908 4.15a4 4 0 015.657 0l4.243 4.243c1.795 1.795 7.07 2.829 7.07 2.829l-5.656 5.657s-1.034-5.276-2.829-7.071L6.151 5.565a2 2 0 00-2.829 2.828l2.829 2.829-1.414 1.414-2.829-2.828a4 4 0 010-5.657z" />
    <path d="M1.908 19.707l.707.707L21.707 1.322 21 .615 1.908 19.707z" />
  </svg>
);

export default SvgComponent;