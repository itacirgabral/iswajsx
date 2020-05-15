import React from "react";

const SvgComponent = (props) => (
  <svg width="1em" height="1em" {...props}>
    <path d="M1 0v1H0v1h1v2H0v1h1v1h1V5h2v1h1V5h1V4H5V2h1V1H5V0H4v1H2V0H1zm1 2h2v2H2V2z" />
  </svg>
);

export default SvgComponent;
