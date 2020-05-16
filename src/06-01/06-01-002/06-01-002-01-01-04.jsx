import React from "react";

const SvgComponent = (props) => (
  <svg width={43} height={39} {...props}>
    <path d="M21.5 0A8.5 8.5 0 0013 8.5a8.501 8.501 0 005 7.75V19h-3a7 7 0 00-7 7v13h2V26a5 5 0 015-5h13a5 5 0 015 5v13h2V26a7 7 0 00-7-7h-3v-2.75a8.501 8.501 0 005-7.75A8.5 8.5 0 0021.5 0zM14 26v13h3V26h-3zm12 0v13h3V26h-3z" />
    <path d="M0 13v2h13.25c-.48-.61-.881-1.291-1.219-2H0zm30.969 0c-.338.709-.738 1.39-1.219 2H43v-2H30.969z" />
  </svg>
);

export default SvgComponent;
