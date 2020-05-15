import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M26 6h11.314L26 17.314V6zm.994.994l.022 7.889 7.867-7.867-7.889-.022z" />
    <path d="M1.958.343l9.016 9.016a4.443 4.443 0 011.237-2.298 4.5 4.5 0 016.364 6.364 4.443 4.443 0 01-2.298 1.237l8.309 8.309a4 4 0 005.657 0c1.952-1.953 1.32-5.752-1.415-8.486l5.657-5.657a9 9 0 010 12.728l-2.828 2.829a6 6 0 01-8.485 0L.544 1.757 1.958.343zm11.668 8.132a2.5 2.5 0 103.535 3.535 2.5 2.5 0 00-3.535-3.535z" />
    <path d="M26.994 6.994l7.889.022-7.867 7.867-.022-7.889z" fill="#fff" />
  </svg>
);

export default SvgComponent;