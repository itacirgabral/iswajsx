import React from "react";

const SvgComponent = (props) => (
  <svg width={36} height={32} {...props}>
    <path d="M0 11h36v4H0v-4z" fill="#fff" />
    <path
      d="M14 0v1.875L7 14l8 13.844v.843C14.004 28.13 13.128 27 12 27h-1c-1.49 0-2.51 2-4 2H4v3h1v-2h2c1.49 0 2.51-2 4-2h1c1.49 0 2.51 2 4 2V27.844L8 14l7-12.125V0h-1zm20 0v4H16.062l-5.78 10L18 27.344V32h1v-4.656L11.281 14 16.5 5H35V0h-1zM11 30c-1.49 0-2.51 2-4 2h2c.627-.5 1.255-1 2-1h1c.745 0 1.373.5 2 1h2c-1.49 0-2.51-2-4-2h-1z"
      fill="#fff"
    />
    <path d="M15 0v1.875L8 14l8 13.844V30c-1.49 0-2.51-2-4-2h-1c-1.49 0-2.51 2-4 2H5v2h2c1.49 0 2.51-2 4-2h1c1.49 0 2.51 2 4 2h2v-4.656L10.281 14l5.781-10H34V0H15z" />
    <path d="M0 12h36v2H0v-2z" />
  </svg>
);

export default SvgComponent;
