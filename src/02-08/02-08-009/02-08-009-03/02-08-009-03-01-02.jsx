import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M28 7l-7-7-7 7h14zM22 7v8a3 3 0 01-3 3 2.98 2.98 0 01-2-.781V21a3 3 0 01-3 3 2.98 2.98 0 01-2-.781V27a4 4 0 01-4 4H7c-3.866 0-7-2.686-7-6h6c0 2.21.895 4 2 4a2 2 0 002-2v-8.563l3.281 3.282c.181.18.443.281.719.281a1 1 0 001-1v-8.563l3.281 3.282c.181.18.443.281.719.281a1 1 0 001-1V7h2z" />
  </svg>
);

export default SvgComponent;