import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M19 5c0 7.18-5.82 13-13 13v-1c6.627 0 12-5.373 12-12V3h1v2z" />
    <path d="M18 5c0 6.627-5.373 12-12 12v-3a9 9 0 009-9V3h3v2z" fill="#fff" />
    <path d="M4.151 5.565L17.586 19 19 17.586 5.565 4.151 4.151 5.565z" />
    <path d="M15 5a9 9 0 01-9 9v-1a8 8 0 008-8V3h1v2zM6 10v11L.5 15.5 6 10zm-.994 2.408L1.914 15.5l3.07 3.07.022-6.162zM0 9.9V0h9.9L0 9.9zm1.016-2.431L7.47 1.016H1.016V7.47z" />
    <path
      d="M1.016 7.469V1.016H7.47L1.016 7.47zM5.006 12.408l-.022 6.162-3.07-3.07 3.092-3.092z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
