import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M5.657 4.243L21.92 20.506l-1.414 1.414L4.243 5.657l1.414-1.414z" />
    <path d="M7 18c6.075 0 11-4.925 11-11h-1c0 5.523-4.477 10-10 10H5v1h2zM12 7h11l-5.5-5.5L12 7zm2.408-.994L17.5 2.914l3.07 3.07-6.162.022zM9.9 0H0v9.9L9.9 0zM7.468 1.016L1.016 7.47V1.016H7.47z" />
    <path
      d="M7.469 1.016H1.016V7.47L7.47 1.016zM14.408 6.006l6.162-.022-3.07-3.07-3.092 3.092z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
