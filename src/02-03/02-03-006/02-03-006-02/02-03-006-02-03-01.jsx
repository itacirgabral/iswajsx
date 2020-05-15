import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M7.5 0l-7 7h2.719l4.219-4.25L11.688 7H14.5l-7-7zM4 7h2v7H4V7zM9 7h2v7H9V7z" />
    <path d="M6 7v7h3V7H6z" fill="#fff" />
    <path d="M20.5 17l-7-7h2.719l4.218 4.25 4.25-4.25H27.5l-7 7zM17 10h2V3h-2v7zM22 10h2V3h-2v7z" />
    <path d="M19 10V3h3v7h-3z" fill="#fff" />
    <path d="M33.5 0l-7 7h2.719l4.218-4.25L37.688 7H40.5l-7-7zM30 7h2v7h-2V7zM35 7h2v7h-2V7z" />
    <path d="M32 7v7h3V7h-3z" fill="#fff" />
    <path d="M0 19v2h41v-2H0z" />
  </svg>
);

export default SvgComponent;
