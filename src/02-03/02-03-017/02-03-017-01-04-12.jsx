import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M19 22l-5.5 5.5L8 22h11zM30 18.1L20.1 28H30v-9.9z" />
    <path d="M22.929 25.172L2.423 4.665l.707-.707 20.506 20.506-.707.708z" />
    <path d="M24 11c-6.075 0-11 4.925-11 11h1c0-5.523 4.477-10 10-10h2v-1h-2z" />
    <path d="M26.464 21.636L5.958 1.13l.707-.707 20.507 20.506-.708.707zM11 14l-5.5 5.5L0 14h11z" />
    <path d="M16 3C9.925 3 5 7.925 5 14h1C6 8.477 10.477 4 16 4h2V3h-2z" />
    <path
      d="M23.636 24.464L3.13 3.958 5.958 1.13l20.506 20.506-2.828 2.828z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;