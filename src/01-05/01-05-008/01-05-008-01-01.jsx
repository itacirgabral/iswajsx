import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M8 25V1s7 0 7 7v9c0 8-7 8-7 8z" />
    <path d="M9 23V3s4 0 4 5v9c0 6-4 6-4 6z" fill="#fff" />
    <path d="M4 0C0 0 .126 3.787 0 4h2c0-2 2-2 2-2h2c2 0 2 2 2 2l.844-2.938C7.663 0 6 0 6 0H4zM4 5S0 5 0 9h2c.083-.1 0-2 2-2h2s2 0 2 2V5.469C7.477 5.193 6.836 5 6 5H4zM4 10s-4 0-4 4h2c.083.015 0-2 2-2h2s2 0 2 2v-3.531C7.477 10.193 6.836 10 6 10H4zM4 15s-4 0-4 4h2c-.043.065 0-2 2-2h2s2 0 2 2v-3.531C7.477 15.193 6.836 15 6 15H4zM0 21c0 4 4 4 4 4h2c.836 0 1.477-.193 2-.469V21c0 2-2 2-2 2H4c-2 0-1.98-1.851-2-2H0z" />
  </svg>
);

export default SvgComponent;