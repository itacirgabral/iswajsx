import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4.243 5.657L20.506 21.92l1.414-1.414L5.657 4.243 4.243 5.657z" />
    <path d="M18 6C11.925 6 7 10.925 7 17h1c0-5.523 4.477-10 10-10h2V6h-2zM13 17H2l5.5 5.5L13 17zm-2.408.994L7.5 21.086l-3.07-3.07 6.162-.022zM0 9.9V0h9.9L0 9.9zm1.016-2.431L7.47 1.016H1.016V7.47z" />
    <path
      d="M1.016 7.469V1.016H7.47L1.016 7.47zM10.592 17.994l-6.162.022 3.07 3.07 3.092-3.092z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;