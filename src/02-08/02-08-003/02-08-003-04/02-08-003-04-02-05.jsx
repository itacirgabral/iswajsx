import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M14 0a6 6 0 00-6 6v25c0 2.981-4 8-4 8h10s-4-5.019-4-8v-1.563A3.99 3.99 0 0012 30a4 4 0 100-8c-.73 0-1.41.221-2 .563v-4.125A3.99 3.99 0 0012 19a4 4 0 100-8c-.73 0-1.41.221-2 .563V6a4 4 0 014-4 3 3 0 013 3v3h2V5a5 5 0 00-5-5zm-2 13a2 2 0 110 4 2 2 0 010-4zm0 11a2 2 0 110 4 2 2 0 010-4zM0 39l9 9 9-9H0zm2.438 1h13.124L9 46.594 2.437 40z" />
    <path d="M2.438 40L9 46.594 15.563 40H2.437z" fill="#fff" />
  </svg>
);

export default SvgComponent;