import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 13v17s8 0 8-5v-7s0-5-8-5z" />
    <path
      d="M10 14.094v14.875c1.24-.077 2.22-.3 3-.594V14.687c-1.077-.362-2.213-.532-3-.593z"
      fill="#fff"
    />
    <path d="M15 0v12.25a8.15 8.15 0 012 1.281V0h-2zM0 19h2s0-4 7-4v-2s-9 0-9 6zM9 3v8c.058.032.883.066 2 .219V3H9zM4.063 6.219L2.625 7.625l3.594 3.594c.791-.12 1.64-.21 2.593-.219l-4.75-4.781zM9 30v-2s-8 0-8-3H0c.077.077 0 5 9 5z" />
  </svg>
);

export default SvgComponent;
