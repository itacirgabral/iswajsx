import React from "react";

const SvgComponent = (props) => (
  <svg width={17} height={16} {...props}>
    <path d="M0 8.719l2.5 2.5 2.5-2.5L4.281 8 2.5 9.781.719 8 0 8.719zM2 6h2V4H2v2zm2 9h2v-2H4v2zM4 3h2V1H4v2zm4 13h2v-2H8v2zM8 2h2V0H8v2zm4 13h2v-2h-2v2zm0-12h2V1h-2v2zm2 9h2v-2h-2v2zm0-6h2V4h-2v2zm1 3h2V7h-2v2z" />
  </svg>
);

export default SvgComponent;
