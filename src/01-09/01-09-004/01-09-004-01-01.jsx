import React from "react";

const SvgComponent = (props) => (
  <svg width={17} height={30} {...props}>
    <path d="M9 13v17s8 0 8-5v-7s0-5-8-5z" />
    <path
      d="M10 14.094v14.875c5.977-.37 6-3.969 6-3.969v-5.5V18c0-3.083-4.069-3.755-6-3.906z"
      fill="#fff"
    />
    <path d="M0 19h2s0-4 7-4v-2s-9 0-9 6zM10 0v13.031c.746.044 1.405.154 2 .281V0h-2z" />
    <path d="M6 3l-1.781.906L8.844 13H9c.359 0 .68.009 1 .031v-2.156L6 3zM2 7L.594 8.406l5.031 5.031a15.906 15.906 0 012.438-.374L2 7zM9 30v-2s-8 0-8-3H0c.077.077 0 5 9 5z" />
  </svg>
);

export default SvgComponent;
