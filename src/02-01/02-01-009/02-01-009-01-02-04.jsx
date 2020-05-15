import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M10 6v3H7v2h3v3H7v2h3v3h2v-3h3v3h2v-3h3v-2h-3v-3h3V9h-3V6h-2v3h-3V6h-2zm2 5h3v3h-3v-3z" />
    <path fill="#fff" d="M12 11h3v3h-3z" />
    <path d="M26.25 15.156l-1.406-1.406L14.25 24.344l1.406 1.406L26.25 15.156zM39.688 28.594l-1.407-1.407-10.593 10.594 1.406 1.407 10.593-10.594zM24 20v3h-3v2h3v3h-3v2h3v3h2v-3h3v3h2v-3h3v-2h-3v-3h3v-2h-3v-3h-2v3h-3v-3h-2zm2 5h3v3h-3v-3z" />
    <path fill="#fff" d="M26 25h3v3h-3z" />
    <path d="M12.813 1.719L11.405.312.812 10.906l1.407 1.406L12.813 1.72z" />
  </svg>
);

export default SvgComponent;
