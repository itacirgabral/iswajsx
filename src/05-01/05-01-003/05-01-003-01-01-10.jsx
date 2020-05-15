import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M53 4H11v4h42V4zM9 0v7.071H7.984V1.016H1.929V0H9z" />
    <path d="M7.586 4.243l-.707-.707-4.243 4.242.707.707 4.243-4.242zM5.464 2.121l-.707-.707L.515 5.657l.707.707 4.242-4.243z" />
  </svg>
);

export default SvgComponent;
