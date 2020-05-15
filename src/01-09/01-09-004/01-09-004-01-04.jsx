import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M9 13v17s8 0 8-5v-7s0-5-8-5z" />
    <path
      d="M10 14.094v14.875c5.977-.37 6-3.969 6-3.969v-5.5V18c0-3.083-4.069-3.755-6-3.906z"
      fill="#fff"
    />
    <path d="M7 13.188c-2.648.38-7 1.622-7 5.812h2s.02-3.16 5-3.844v-1.969zM10 0v11.063c.714.037 1.395.11 2 .218V0h-2zM6 3l-1.781.906 3.656 7.156c.223-.019.498-.054.656-.062H9c.357 0 .668.045 1 .063v-.188L6 3zM2 7L.594 8.406 4 11.812c.822-.264 1.595-.377 2.313-.5L2 7zM0 25c.07.07.022 4.233 7 4.906v-2.031C4.631 27.663 1 27.03 1 25H0z" />
  </svg>
);

export default SvgComponent;
