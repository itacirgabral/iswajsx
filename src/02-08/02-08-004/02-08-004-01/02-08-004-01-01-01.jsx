import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M0 7l7-7 7 7H0zM6 7v6a5 5 0 005 5c1.38 0 2.626-.564 3.531-1.469l.75-.75c.181-.18.443-.281.719-.281a1 1 0 011 1V20c0 3.59-4 10-4 10h10s-4-6.41-4-10v-3.5a3 3 0 00-3-3c-.828 0-1.582.332-2.125.875l-.75.75A2.996 2.996 0 0111 16a3 3 0 01-3-3V7H6z" />
  </svg>
);

export default SvgComponent;