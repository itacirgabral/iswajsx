import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M22.815 5.599L4.431 23.984l-1.415-1.415L21.401 4.185l1.414 1.414z" />
    <path d="M11.016 4.984c0 6.075 4.925 11 11 11v-1c-5.522 0-10-4.478-10-10v-2h-1v2zM22.016 9.984v11l5.5-5.5-5.5-5.5zm.994 2.407l3.093 3.093-3.07 3.07-.023-6.163zM27.016 9.883v-9.9h-9.899l9.9 9.9zM26 7.453L19.548 1H26v6.452z" />
    <path
      d="M26 7.452V1h-6.452L26 7.452zM23.01 12.391l.023 6.163 3.07-3.07-3.093-3.093z"
      fill="#fff"
    />
    <path d="M16.016 22.984c-6.075 0-11-4.925-11-11h1c0 5.522 4.478 10 10 10h2v1h-2zM11.016 11.984h-11l5.5-5.5 5.5 5.5zM8.61 10.99L5.516 7.897l-3.07 3.07 6.163.023z" />
    <path d="M8.609 10.99l-6.163-.023 3.07-3.07L8.61 10.99z" fill="#fff" />
  </svg>
);

export default SvgComponent;
