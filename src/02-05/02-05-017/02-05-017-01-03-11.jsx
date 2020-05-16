import React from "react";

const SvgComponent = (props) => (
  <svg width={38} height={20} {...props}>
    <path d="M31 9v2H0V9h31zM31 17l7-7-7-7v2.844L35.156 10 31 14.156V17zM29 14l-5.5 5.5L18 14h1.414l4.086 4.086L27.586 14H29z" />
    <path d="M21 0a3 3 0 013 3v8c0 1.005.387 1.899 1 2.594V15h-3v-1.406c.613-.695 1-1.59 1-2.594V3a2 2 0 00-4 0v4h-1V3a3 3 0 013-3zM17 14l-5.5 5.5L6 14h1.414l4.086 4.086L15.586 14H17z" />
    <path d="M9 0a3 3 0 013 3v8c0 1.005.387 1.899 1 2.594V15h-3v-1.406c.613-.695 1-1.59 1-2.594V3a2 2 0 00-4 0v4H6V3a3 3 0 013-3z" />
  </svg>
);

export default SvgComponent;
