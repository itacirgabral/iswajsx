import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M1 9.1V19h9.9l-1.415-1.414h-7.07v-7.071L1 9.1z" />
    <path d="M20.092 4.15a4 4 0 00-5.657 0l-4.243 4.243c-1.795 1.795-7.07 2.829-7.07 2.829l5.656 5.657s1.034-5.276 2.829-7.071l4.242-4.243a2 2 0 012.829 2.828l-2.829 2.829 1.414 1.414 2.829-2.828a4 4 0 000-5.657z" />
    <path d="M20.092 19.707l-.707.707L.293 1.322 1 .615l19.092 19.092z" />
  </svg>
);

export default SvgComponent;
