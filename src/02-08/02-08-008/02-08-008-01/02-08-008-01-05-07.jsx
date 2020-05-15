import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M11 0h8.485L11 8.485V0zm.994.994l.022 5.06 5.039-5.038-5.06-.022z" />
    <path d="M1.1 4.243l7.072 7.07a4 4 0 005.656 0c1.172-1.17.855-3.387-.707-4.949l.707-.707 3.536-3.536a6 6 0 010 8.486l-2.121 2.12a5 5 0 01-7.071 0L.393 4.95l.708-.707z" />
    <path d="M11.994.994l5.06.022-5.038 5.039-.022-5.06z" fill="#fff" />
  </svg>
);

export default SvgComponent;
