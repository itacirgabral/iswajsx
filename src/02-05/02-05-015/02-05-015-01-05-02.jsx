import React from "react";

const SvgComponent = (props) => (
  <svg width={28} height={24} {...props}>
    <path d="M5.201 5.615L23.586 24 25 22.586 6.615 4.2 5.201 5.615z" />
    <path d="M17 5c0 6.075-4.925 11-11 11v-1c5.523 0 10-4.477 10-10V3h1v2zM6 10v11L.5 15.5 6 10zm-.994 2.408L1.914 15.5l3.07 3.07.022-6.162zM1 9.9V0h9.9L1 9.9zm1.016-2.431L8.47 1.016H2.016V7.47z" />
    <path
      d="M2.016 7.469V1.016H8.47L2.016 7.47zM5.006 12.408l-.022 6.162-3.07-3.07 3.092-3.092z"
      fill="#fff"
    />
    <path d="M12 23c6.075 0 11-4.925 11-11h-1c0 5.523-4.477 10-10 10h-2v1h2zM17 12h11l-5.5-5.5L17 12zm2.408-.994L22.5 7.914l3.07 3.07-6.162.022z" />
    <path d="M19.408 11.006l6.162-.022-3.07-3.07-3.092 3.092z" fill="#fff" />
  </svg>
);

export default SvgComponent;
