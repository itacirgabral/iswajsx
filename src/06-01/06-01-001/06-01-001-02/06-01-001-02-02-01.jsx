import React from "react";

const SvgComponent = (props) => (
  <svg width={41} height={41} {...props}>
    <path d="M17 2v18h7V2h-1v10h-5V2h-1z" />
    <path d="M12 0L0 12v17l12 12h17l12-12V12L29 0H12zm.813 2h15.374l5.032 5.063L24 16.28v1.438l9.938-9.938L39 12.813V20H2v-7.188l5.063-5.03L17 17.718V16.28L7.781 7.063 12.813 2zM2 21h17.281L7.063 33.219 2 28.187V21zm19.719 0H39v7.188l-5.063 5.03L21.72 21zM20 21.719V39h-7.188l-5.03-5.063L20 21.72zm1 0l12.219 12.218L28.187 39H21V21.719z" />
  </svg>
);

export default SvgComponent;
