import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M12 13H0l6-6 6 6z" />
    <path d="M10.5 0C12.985 0 15 3.806 15 8.5v8c0 4.694-2.015 8.5-4.5 8.5h-2C6.015 25 4 21.194 4 16.5V14h4v2.5c0 4.142 1.12 7.5 2.5 7.5s2.5-3.358 2.5-7.5v-8C13 4.358 11.88 1 10.5 1 9.415 1 8.502 3.1 8.156 6H4.22C4.786 2.532 6.478 0 8.5 0h2z" />
  </svg>
);

export default SvgComponent;