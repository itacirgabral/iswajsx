import React from "react";

const SvgComponent = (props) => (
  <svg width={17} height={30} {...props}>
    <path d="M9 13v17s8 0 8-5v-7s0-5-8-5z" />
    <path
      d="M10 14.094v14.875c5.977-.37 6-3.969 6-3.969v-5.5V18c0-3.083-4.069-3.755-6-3.906z"
      fill="#fff"
    />
    <path d="M15 0v12.25a8.15 8.15 0 012 1.281V0h-2zM0 19h2s0-4 7-4v-2s-9 0-9 6zM9 3v8c.058.032.883.066 2 .219V3H9zM4.063 6.219L2.625 7.625l3.594 3.594c.791-.12 1.64-.21 2.593-.219l-4.75-4.781zM9 30v-2s-8 0-8-3H0c.077.077 0 5 9 5z" />
  </svg>
);

export default SvgComponent;
