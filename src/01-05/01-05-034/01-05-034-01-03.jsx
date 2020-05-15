import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 0v20c8 0 8-8 8-8V8c0-8-8-8-8-8zM9 4V0C0 0 0 8 0 8h2c0-4 7-4 7-4zM9 20v-2c-8 0-8.038-3.928-8-4H0c0 6 9 6 9 6z" />
  </svg>
);

export default SvgComponent;