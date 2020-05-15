import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M27 5H0V3h27v2zM47 3h27v2H47V3zM74 9H0v2h74V9z" />
    <path d="M47 3v2h27v4H0V5h27V3h20z" fill="#fff" />
    <path d="M33.594 0L43 5.438V7H31V5h7.313L31 .781V0h2.594z" />
  </svg>
);

export default SvgComponent;
