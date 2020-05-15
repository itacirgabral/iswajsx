import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M14 0h9.192L14 9.192V0zm.994.994l.022 5.768 5.746-5.746-5.768-.022z" />
    <path d="M1.272 6.364l8.485 8.485c1.953 1.953 5.435 1.636 7.779-.707 1.562-1.562.928-4.728-1.415-7.07l4.95-4.95a9 9 0 010 12.727l-1.414 1.414c-2.734 2.734-7.483 2.418-10.607-.707L.565 7.071l.707-.707z" />
    <path d="M14.994.994l5.768.022-5.746 5.746-.022-5.768z" fill="#fff" />
  </svg>
);

export default SvgComponent;
