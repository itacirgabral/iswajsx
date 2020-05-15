import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M4 0a4 4 0 00-4 4v25h2v-6.406A2.98 2.98 0 003.5 23a3 3 0 000-6 2.98 2.98 0 00-1.5.406v-2.812A2.98 2.98 0 003.5 15a3 3 0 000-6 2.98 2.98 0 00-1.5.406V4a2 2 0 012-2 1 1 0 011 1v5h2V3a3 3 0 00-3-3zm-.5 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 8a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
  </svg>
);

export default SvgComponent;